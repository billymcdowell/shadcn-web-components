import {
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    DoughnutController,
    Legend,
    LineController,
    LineElement,
    LinearScale,
    PieController,
    PointElement,
    PolarAreaController,
    RadialLinearScale,
    Tooltip,
} from 'chart.js';
import type { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { LitElement, css, html, type PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

ChartJS.register(
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    DoughnutController,
    Legend,
    LineController,
    LineElement,
    LinearScale,
    PieController,
    PointElement,
    PolarAreaController,
    RadialLinearScale,
    Tooltip,
);

export type { ChartData, ChartOptions, ChartType } from 'chart.js';

/**
 * A responsive Chart.js visualization styled with the shadcn chart palette.
 *
 * Set `data` and `options` as JavaScript properties because they contain
 * structured Chart.js configuration objects.
 *
 * @element shadcn-chart
 * @csspart container - The element that controls the chart dimensions.
 * @csspart canvas - The canvas rendered by Chart.js.
 * @cssprop --chart-height - Height of the chart container.
 * @cssprop --chart-1 - First fallback dataset color.
 * @cssprop --chart-2 - Second fallback dataset color.
 * @cssprop --chart-3 - Third fallback dataset color.
 * @cssprop --chart-4 - Fourth fallback dataset color.
 * @cssprop --chart-5 - Fifth fallback dataset color.
 */
@customElement('shadcn-chart')
export class Chart extends LitElement {
    static styles = [
        tokensBase,
        css`
            :host {
                display: block;
                width: 100%;
            }

            .container {
                position: relative;
                width: 100%;
                height: var(--chart-height, 20rem);
                min-height: 1px;
            }

            canvas {
                display: block;
            }

            .empty {
                display: grid;
                place-items: center;
                height: 100%;
                color: var(--muted-foreground);
                font-family: var(--font-sans);
                font-size: var(--font-size-sm);
                text-align: center;
            }
        `,
    ];

    /** Chart.js chart type. Changing the type recreates the chart instance. */
    @property({ type: String, reflect: true }) type: ChartType = 'bar';

    /** Chart.js data configuration. Set this value as a JavaScript property. */
    @property({ attribute: false }) data: ChartData = { datasets: [] };

    /** Chart.js options. Responsive sizing is enabled by default. */
    @property({ attribute: false }) options: ChartOptions = {};

    /** Accessible name for the canvas visualization. */
    @property({ type: String, attribute: 'aria-label' }) label = 'Chart';

    /** Message displayed when no datasets have been supplied. */
    @property({ type: String, attribute: 'empty-message' }) emptyMessage = 'No chart data available';

    @query('canvas') private canvas?: HTMLCanvasElement;

    private chartInstance?: ChartJS;

    /** The underlying Chart.js instance, available after the first render. */
    get chart(): ChartJS | undefined {
        return this.chartInstance;
    }

    protected firstUpdated(): void {
        this.createChart();
    }

    protected updated(changed: PropertyValues<this>): void {
        if (!this.hasUpdated || changed.has('label') || changed.has('emptyMessage')) return;

        if (changed.has('type')) {
            this.destroyChart();
            this.createChart();
            return;
        }

        if (changed.has('data') || changed.has('options')) {
            this.updateChart();
        }
    }

    disconnectedCallback(): void {
        this.destroyChart();
        super.disconnectedCallback();
    }

    connectedCallback(): void {
        super.connectedCallback();
        if (this.hasUpdated && !this.chartInstance) {
            void this.updateComplete.then(() => this.createChart());
        }
    }

    render() {
        const isEmpty = this.data.datasets.length === 0;

        return html`
            <div part="container" class="container">
                ${isEmpty
                    ? html`<div class="empty" role="status">${this.emptyMessage}</div>`
                    : html`<canvas part="canvas" role="img" aria-label=${this.label}>${this.label}</canvas>`}
            </div>
        `;
    }

    private createChart(): void {
        if (!this.canvas || this.data.datasets.length === 0) return;

        this.chartInstance = new ChartJS(this.canvas, {
            type: this.type,
            data: this.getThemedData(),
            options: this.getOptions(),
        });
    }

    private updateChart(): void {
        if (this.data.datasets.length === 0 || !this.canvas) {
            this.destroyChart();
            return;
        }

        if (!this.chartInstance) {
            this.createChart();
            return;
        }

        this.chartInstance.data = this.getThemedData();
        this.chartInstance.options = this.getOptions();
        this.chartInstance.update();
    }

    private getOptions(): ChartOptions {
        return {
            responsive: true,
            maintainAspectRatio: false,
            ...this.options,
        };
    }

    private getThemedData(): ChartData {
        const style = getComputedStyle(this);
        const colors = Array.from({ length: 5 }, (_, index) =>
            style.getPropertyValue(`--chart-${index + 1}`).trim(),
        ).filter(Boolean);

        if (colors.length === 0) return this.data;

        return {
            ...this.data,
            datasets: this.data.datasets.map((dataset, index) => {
                const color = colors[index % colors.length];
                const usesSegmentColors = ['doughnut', 'pie', 'polarArea'].includes(this.type);
                const segmentColors = this.data.labels?.map((_, labelIndex) => colors[labelIndex % colors.length]);

                return {
                    ...dataset,
                    borderColor: dataset.borderColor ?? color,
                    backgroundColor: dataset.backgroundColor ?? (usesSegmentColors ? segmentColors : color),
                } as ChartDataset;
            }),
        };
    }

    private destroyChart(): void {
        this.chartInstance?.destroy();
        this.chartInstance = undefined;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-chart': Chart;
    }
}
