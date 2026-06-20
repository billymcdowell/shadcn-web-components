import{x as t}from"./iframe-CBkYFfHe.js";import"./preload-helper-BBXEHTOU.js";const r="./examples/example.html",d={title:"Examples/Production Gallery",parameters:{layout:"fullscreen",docs:{description:{component:"The complete component gallery, loaded from the published npm package."}}}},e={render:()=>t`
        <div style="min-height: 100vh; background: oklch(0.145 0 0);">
            <div style="padding: 0.75rem 1rem; border-bottom: 1px solid oklch(1 0 0 / 10%);">
                <a
                    href=${r}
                    target="_blank"
                    rel="noreferrer"
                    style="color: oklch(0.985 0 0); font: 500 0.875rem/1.5 system-ui, sans-serif;"
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
    `};var o,l,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
        <div style="min-height: 100vh; background: oklch(0.145 0 0);">
            <div style="padding: 0.75rem 1rem; border-bottom: 1px solid oklch(1 0 0 / 10%);">
                <a
                    href=\${galleryUrl}
                    target="_blank"
                    rel="noreferrer"
                    style="color: oklch(0.985 0 0); font: 500 0.875rem/1.5 system-ui, sans-serif;"
                >
                    Open the standalone production gallery
                </a>
            </div>
            <iframe
                src=\${galleryUrl}
                title="shadcn Web Components production gallery"
                style="display: block; width: 100%; height: calc(100vh - 3.25rem); border: 0;"
            ></iframe>
        </div>
    \`
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const i=["AllComponents"];export{e as AllComponents,i as __namedExportsOrder,d as default};
