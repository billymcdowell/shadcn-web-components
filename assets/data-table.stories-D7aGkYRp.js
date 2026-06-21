import{i as z,a as D,E as p,x as d}from"./iframe-B6ecvixb.js";import{t as M}from"./custom-element-C028faeO.js";import{n as c}from"./property-BCNZ7cbM.js";import{r as N}from"./state-DUyYIdlX.js";import{t as O}from"./index-DEzpxp9E.js";import"./preload-helper-BBXEHTOU.js";var E=Object.defineProperty,L=Object.getOwnPropertyDescriptor,n=(e,t,a,s)=>{for(var o=s>1?void 0:s?L(t,a):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(s?l(t,a,o):l(o))||o);return s&&o&&E(t,a,o),o};let r=class extends D{constructor(){super(...arguments),this.columns=[],this.data=[],this.pageSize=10,this.page=1,this.filter="",this.filterColumn="",this.filterPlaceholder="Filter rows...",this.emptyMessage="No results.",this.selectable=!1,this.loading=!1,this.rowIdKey="id",this.sortKey="",this.sortDirection="none",this.selectedRowIds=[],this.hiddenColumns=[],this.previousPage=()=>this._setPage(this.page-1),this.nextPage=()=>this._setPage(this.page+1)}get _visibleColumns(){return this.columns.filter(e=>!this.hiddenColumns.includes(this._columnId(e)))}get _processedRows(){const e=this.filter.trim().toLocaleLowerCase();let t=this.data.map((a,s)=>({row:a,index:s,id:this._rowId(a,s)}));if(e){const a=this.columns.filter(s=>{const o=this._columnId(s);return s.filterable!==!1&&(!this.filterColumn||o===this.filterColumn||s.accessorKey===this.filterColumn)});t=t.filter(({row:s})=>a.some(o=>String(Reflect.get(s,o.accessorKey)??"").toLocaleLowerCase().includes(e)))}if(this.sortKey&&this.sortDirection!=="none"){const a=this.columns.find(s=>this._columnId(s)===this.sortKey||s.accessorKey===this.sortKey);if(a){const s=this.sortDirection==="asc"?1:-1;t=[...t].sort((o,i)=>this._compare(Reflect.get(o.row,a.accessorKey),Reflect.get(i.row,a.accessorKey))*s)}}return t}get _pageCount(){return Math.max(1,Math.ceil(this._processedRows.length/Math.max(1,this.pageSize)))}get _pageRows(){const t=(Math.min(Math.max(1,this.page),this._pageCount)-1)*Math.max(1,this.pageSize);return this._processedRows.slice(t,t+Math.max(1,this.pageSize))}willUpdate(){this.page<1&&(this.page=1),this.page>this._pageCount&&(this.page=this._pageCount)}render(){const e=this._visibleColumns,t=this._pageRows,a=t.filter(({id:i})=>this.selectedRowIds.includes(i)).length,s=t.length>0&&a===t.length,o=this.columns.filter(i=>i.hideable!==!1);return d`
      <div part="toolbar" class="toolbar">
        <input
          part="filter"
          class="filter"
          type="search"
          .value=${this.filter}
          placeholder=${this.filterPlaceholder}
          aria-label=${this.filterPlaceholder}
          ?disabled=${this.loading}
          @input=${this._handleFilter}
        />
        ${o.length?d`
          <details class="columns">
            <summary part="columns-trigger" class="button">Columns <span aria-hidden="true">v</span></summary>
            <div part="columns-menu" class="columns-menu">
              ${o.map(i=>{const l=this._columnId(i);return d`<label class="column-option"><input type="checkbox" .checked=${!this.hiddenColumns.includes(l)} @change=${()=>this._toggleColumn(l)} />${i.header}</label>`})}
            </div>
          </details>
        `:p}
      </div>
      <div part="table-container" class="table-container">
        <table part="table">
          <thead><tr>
            ${this.selectable?d`<th class="select-cell"><input type="checkbox" aria-label="Select all rows on this page" .checked=${s} .indeterminate=${a>0&&!s} ?disabled=${!t.length||this.loading} @change=${this._togglePageSelection} /></th>`:p}
            ${e.map(i=>d`<th class=${`align-${i.align??"left"}`} aria-sort=${this._ariaSort(i)}>
              ${i.sortable?d`<button class="sort-button" type="button" @click=${()=>this._toggleSort(i)}>${i.header}<span class="sort-icon" aria-hidden="true">${this._sortIcon(i)}</span></button>`:i.header}
            </th>`)}
          </tr></thead>
          <tbody>
            ${this.loading?d`<tr><td class="message" colspan=${e.length+(this.selectable?1:0)}>Loading...</td></tr>`:t.length?t.map(({row:i,id:l})=>d`
              <tr data-state=${this.selectedRowIds.includes(l)?"selected":p}>
                ${this.selectable?d`<td class="select-cell"><input type="checkbox" aria-label="Select row" .checked=${this.selectedRowIds.includes(l)} @click=${h=>this._toggleRowSelection(l,h)} /></td>`:p}
                ${e.map(h=>{const f=Reflect.get(i,h.accessorKey);return d`<td class=${`align-${h.align??"left"}`}>${h.cell?h.cell(f,i):String(f??"")}</td>`})}
              </tr>
            `):d`<tr><td class="message" colspan=${e.length+(this.selectable?1:0)}>${this.emptyMessage}</td></tr>`}
          </tbody>
        </table>
      </div>
      <div part="pagination" class="pagination">
        ${this.selectable?d`<span class="selection-summary">${this.selectedRowIds.length} of ${this._processedRows.length} row(s) selected.</span>`:p}
        <span class="page-summary">Page ${this.page} of ${this._pageCount}</span>
        <button part="previous-button" class="button" type="button" ?disabled=${this.page<=1||this.loading} @click=${this.previousPage}>Previous</button>
        <button part="next-button" class="button" type="button" ?disabled=${this.page>=this._pageCount||this.loading} @click=${this.nextPage}>Next</button>
      </div>
    `}reset(){this.filter="",this.sortKey="",this.sortDirection="none",this.page=1,this.selectedRowIds=[],this.hiddenColumns=[],this._selectionAnchor=void 0}_columnId(e){return e.id??e.accessorKey}_rowId(e,t){const a=Reflect.get(e,this.rowIdKey);return a==null?String(t):String(a)}_compare(e,t){return e===t?0:e==null?-1:t==null?1:typeof e=="number"&&typeof t=="number"?e-t:String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}_ariaSort(e){return this._columnId(e)===this.sortKey&&this.sortDirection!=="none"?this.sortDirection==="asc"?"ascending":"descending":"none"}_sortIcon(e){return this._columnId(e)!==this.sortKey||this.sortDirection==="none"?"-":this.sortDirection==="asc"?"^":"v"}_toggleSort(e){const t=this._columnId(e);this.sortKey!==t?(this.sortKey=t,this.sortDirection="asc"):(this.sortDirection=this.sortDirection==="asc"?"desc":this.sortDirection==="desc"?"none":"asc",this.sortDirection==="none"&&(this.sortKey="")),this.page=1,this._emit("data-table-sort-change",{key:this.sortKey,direction:this.sortDirection})}_handleFilter(e){this.filter=e.target.value,this.page=1,this._emit("data-table-filter-change",{filter:this.filter,column:this.filterColumn})}_setPage(e){const t=Math.min(Math.max(1,e),this._pageCount);t!==this.page&&(this.page=t,this._emit("data-table-page-change",{page:this.page,pageSize:this.pageSize,pageCount:this._pageCount}))}_toggleColumn(e){this.hiddenColumns=this.hiddenColumns.includes(e)?this.hiddenColumns.filter(t=>t!==e):[...this.hiddenColumns,e],this._emit("data-table-column-visibility-change",{hiddenColumns:[...this.hiddenColumns]})}_togglePageSelection(e){const t=e.target.checked,a=this._pageRows.map(({id:s})=>s);this.selectedRowIds=t?[...new Set([...this.selectedRowIds,...a])]:this.selectedRowIds.filter(s=>!a.includes(s)),this._emitSelection()}_toggleRowSelection(e,t){const a=t.target.checked;if(t.shiftKey&&this._selectionAnchor){const s=this._processedRows.map(l=>l.id),o=s.indexOf(this._selectionAnchor),i=s.indexOf(e);if(o>=0&&i>=0){const l=s.slice(Math.min(o,i),Math.max(o,i)+1);this.selectedRowIds=a?[...new Set([...this.selectedRowIds,...l])]:this.selectedRowIds.filter(h=>!l.includes(h))}}else this.selectedRowIds=a?[...new Set([...this.selectedRowIds,e])]:this.selectedRowIds.filter(s=>s!==e);this._selectionAnchor=e,this._emitSelection()}_emitSelection(){const e=new Set(this.selectedRowIds),t=this.data.filter((a,s)=>e.has(this._rowId(a,s)));this._emit("data-table-selection-change",{selectedRowIds:[...this.selectedRowIds],selectedRows:t})}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}};r.styles=[O,z`
      :host {
        display: block;
        width: 100%;
        color: var(--foreground);
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
      }

      * { box-sizing: border-box; }

      .toolbar {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        padding: var(--spacing-4) 0;
      }

      .filter {
        width: min(100%, 24rem);
        height: 2.25rem;
        padding: 0 var(--spacing-3);
        border: 1px solid var(--input);
        border-radius: var(--radius-md);
        outline: 2px solid transparent;
        outline-offset: 2px;
        background: var(--background);
        color: var(--foreground);
        font: inherit;
      }

      .filter::placeholder { color: var(--muted-foreground); }
      .filter:focus-visible, button:focus-visible, summary:focus-visible, input[type='checkbox']:focus-visible {
        outline-color: var(--ring);
      }
      .filter:disabled { cursor: not-allowed; opacity: 0.5; }

      .columns { position: relative; margin-left: auto; }
      .columns summary { list-style: none; }
      .columns summary::-webkit-details-marker { display: none; }
      .columns-menu {
        position: absolute;
        z-index: 10;
        top: calc(100% + var(--spacing-1));
        right: 0;
        min-width: 10rem;
        padding: var(--spacing-1);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--popover);
        color: var(--popover-foreground);
        box-shadow: var(--shadow-md);
      }

      .column-option {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        padding: var(--spacing-2);
        border-radius: var(--radius-sm);
        text-transform: capitalize;
        cursor: pointer;
      }
      .column-option:hover { background: var(--accent); color: var(--accent-foreground); }

      .button {
        display: inline-flex;
        height: 2.25rem;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2);
        padding: 0 var(--spacing-3);
        border: 1px solid var(--input);
        border-radius: var(--radius-md);
        outline: 2px solid transparent;
        outline-offset: 2px;
        background: var(--background);
        color: var(--foreground);
        font: inherit;
        font-weight: var(--font-medium);
        white-space: nowrap;
        cursor: pointer;
      }
      .button:hover:not(:disabled) { background: var(--accent); color: var(--accent-foreground); }
      .button:disabled { cursor: not-allowed; opacity: 0.5; }

      .table-container {
        width: 100%;
        overflow: auto;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
      }
      table { width: 100%; min-width: var(--data-table-min-width, 36rem); border-collapse: collapse; }
      tr { border-bottom: 1px solid var(--border); transition: background-color var(--transition-fast); }
      tbody tr:last-child { border-bottom: 0; }
      tbody tr:hover, tbody tr[data-state='selected'] { background: color-mix(in oklch, var(--muted) 50%, transparent); }
      th, td { height: 2.75rem; padding: var(--spacing-2); text-align: left; vertical-align: middle; }
      th { color: var(--muted-foreground); font-weight: var(--font-medium); white-space: nowrap; }
      td { white-space: nowrap; }
      .align-center { text-align: center; }
      .align-right { text-align: right; }
      .select-cell { width: 2.5rem; text-align: center; }
      input[type='checkbox'] { width: 1rem; height: 1rem; accent-color: var(--primary); cursor: pointer; }
      .sort-button {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-2);
        margin: calc(var(--spacing-2) * -1);
        padding: var(--spacing-2);
        border: 0;
        border-radius: var(--radius-sm);
        outline: 2px solid transparent;
        outline-offset: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        font-weight: inherit;
        cursor: pointer;
      }
      .sort-button:hover { background: var(--accent); color: var(--accent-foreground); }
      .sort-icon { width: 1rem; color: var(--muted-foreground); font-size: var(--font-size-xs); }
      .message { height: 6rem; color: var(--muted-foreground); text-align: center; }
      .pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--spacing-2);
        min-height: 4rem;
        padding: var(--spacing-4) 0;
      }
      .selection-summary { margin-right: auto; color: var(--muted-foreground); font-size: var(--font-size-xs); }
      .page-summary { color: var(--muted-foreground); font-size: var(--font-size-xs); }

      @media (max-width: 40rem) {
        .toolbar { align-items: stretch; flex-wrap: wrap; }
        .filter { width: 100%; }
        .pagination { flex-wrap: wrap; }
      }
    `];n([c({attribute:!1})],r.prototype,"columns",2);n([c({attribute:!1})],r.prototype,"data",2);n([c({type:Number,attribute:"page-size"})],r.prototype,"pageSize",2);n([c({type:Number})],r.prototype,"page",2);n([c({type:String})],r.prototype,"filter",2);n([c({type:String,attribute:"filter-column"})],r.prototype,"filterColumn",2);n([c({type:String,attribute:"filter-placeholder"})],r.prototype,"filterPlaceholder",2);n([c({type:String,attribute:"empty-message"})],r.prototype,"emptyMessage",2);n([c({type:Boolean})],r.prototype,"selectable",2);n([c({type:Boolean,reflect:!0})],r.prototype,"loading",2);n([c({type:String,attribute:"row-id-key"})],r.prototype,"rowIdKey",2);n([c({type:String,attribute:"sort-key"})],r.prototype,"sortKey",2);n([c({type:String,attribute:"sort-direction"})],r.prototype,"sortDirection",2);n([c({attribute:!1})],r.prototype,"selectedRowIds",2);n([c({attribute:!1})],r.prototype,"hiddenColumns",2);n([N()],r.prototype,"_selectionAnchor",2);r=n([M("shadcn-data-table")],r);const P=[{accessorKey:"status",header:"Status",sortable:!0,hideable:!0},{accessorKey:"email",header:"Email",sortable:!0,filterable:!0,hideable:!1},{accessorKey:"amount",header:"Amount",sortable:!0,hideable:!0,align:"right",cell:e=>`$${Number(e).toFixed(2)}`}],A=[{id:"m5gr84i9",status:"success",email:"ken99@example.com",amount:316},{id:"3u1reuv4",status:"success",email:"abe45@example.com",amount:242},{id:"derv1ws0",status:"processing",email:"monserrat44@example.com",amount:837},{id:"5kma53ae",status:"success",email:"silas22@example.com",amount:874},{id:"bhqecj4p",status:"failed",email:"carmella@example.com",amount:721},{id:"2h13fe8r",status:"processing",email:"marc@example.com",amount:428}],U={title:"Components/Data Table",component:"shadcn-data-table",tags:["autodocs"],argTypes:{pageSize:{control:{type:"number",min:1},description:"Rows displayed per page."},selectable:{control:"boolean",description:"Shows row selection controls."},loading:{control:"boolean",description:"Shows the loading state."},filterPlaceholder:{control:"text",description:"Filter input placeholder."},emptyMessage:{control:"text",description:"Message displayed when no rows match."}},args:{pageSize:5,selectable:!0,loading:!1,filterPlaceholder:"Filter emails...",emptyMessage:"No results."},render:e=>d`<shadcn-data-table
    .columns=${P}
    .data=${A}
    .pageSize=${e.pageSize}
    .selectable=${e.selectable}
    .loading=${e.loading}
    .filterPlaceholder=${e.filterPlaceholder}
    .emptyMessage=${e.emptyMessage}
  ></shadcn-data-table>`},u={},g={args:{loading:!0}},m={render:()=>d`<shadcn-data-table .columns=${P} .data=${[]} empty-message="No payments found."></shadcn-data-table>`},b={args:{selectable:!1}};var y,v,w;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(w=(v=u.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var _,x,$;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...($=(x=g.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var S,C,R;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:'{\n  render: () => html`<shadcn-data-table .columns=${columns} .data=${[]} empty-message="No payments found."></shadcn-data-table>`\n}',...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var I,k,K;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    selectable: false
  }
}`,...(K=(k=b.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};const G=["Default","Loading","Empty","WithoutSelection"];export{u as Default,m as Empty,g as Loading,b as WithoutSelection,G as __namedExportsOrder,U as default};
