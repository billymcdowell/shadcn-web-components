import{x as d}from"./iframe-B6ecvixb.js";import"./preload-helper-BBXEHTOU.js";const m="./examples/example.html",g={title:"Examples/Production Gallery",parameters:{layout:"fullscreen",docs:{description:{component:"The complete component gallery, loaded from examples/example.html. Every integrated component is shown with its relevant variants and states."}}}},e={render:(i,{globals:a})=>{var n;const s=((n=a.backgrounds)==null?void 0:n.value)==="light"?"light":"dark",r=`${m}?theme=${s}`;return d`
            <div style="min-height: 100vh; background: var(--background); color: var(--foreground);">
                <div style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border);">
                    <a
                        href=${r}
                        target="_blank"
                        rel="noreferrer"
                        style="color: var(--foreground); font: 500 0.875rem/1.5 system-ui, sans-serif;"
                    >
                        Open the standalone production gallery
                    </a>
                </div>
                <iframe
                    src=${r}
                    title="shadcn Web Components production gallery"
                    style="display: block; width: 100%; height: calc(100vh - 3.25rem); border: 0;"
                ></iframe>
            </div>
        `}};var t,o,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (_args, {
    globals
  }) => {
    const theme = globals.backgrounds?.value === 'light' ? 'light' : 'dark';
    const themedGalleryUrl = \`\${galleryUrl}?theme=\${theme}\`;
    return html\`
            <div style="min-height: 100vh; background: var(--background); color: var(--foreground);">
                <div style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border);">
                    <a
                        href=\${themedGalleryUrl}
                        target="_blank"
                        rel="noreferrer"
                        style="color: var(--foreground); font: 500 0.875rem/1.5 system-ui, sans-serif;"
                    >
                        Open the standalone production gallery
                    </a>
                </div>
                <iframe
                    src=\${themedGalleryUrl}
                    title="shadcn Web Components production gallery"
                    style="display: block; width: 100%; height: calc(100vh - 3.25rem); border: 0;"
                ></iframe>
            </div>
        \`;
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const p=["AllComponents"];export{e as AllComponents,p as __namedExportsOrder,g as default};
