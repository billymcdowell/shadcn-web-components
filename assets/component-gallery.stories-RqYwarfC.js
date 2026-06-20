import{x as d}from"./iframe-DzFl6Ur1.js";import"./preload-helper-BBXEHTOU.js";const m="./examples/example.html",g={title:"Examples/Production Gallery",parameters:{layout:"fullscreen",docs:{description:{component:"The complete component gallery, loaded from the published npm package."}}}},e={render:(i,{globals:a})=>{var o;const s=((o=a.backgrounds)==null?void 0:o.value)==="light"?"light":"dark",r=`${m}?theme=${s}`;return d`
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
        `}};var n,t,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const p=["AllComponents"];export{e as AllComponents,p as __namedExportsOrder,g as default};
