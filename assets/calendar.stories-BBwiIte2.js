import{x as b}from"./iframe-B5y9qznB.js";import"./calendar-BAmxKvHB.js";import"./preload-helper-BBXEHTOU.js";import"./custom-element-C028faeO.js";import"./property-DwCo9F1Y.js";import"./index-BBGFRwet.js";const Y={title:"Components/Calendar",component:"shadcn-calendar",tags:["autodocs"],argTypes:{value:{control:"text",description:"Selected ISO date."},month:{control:"text",description:"Displayed YYYY-MM month."},min:{control:"text"},max:{control:"text"},locale:{control:"text"},weekStartsOn:{control:{type:"number",min:0,max:6}},showOutsideDays:{control:"boolean"},disabled:{control:"boolean"}}},a=e=>b`<shadcn-calendar value=${e.value??""} month=${e.month??""} min=${e.min??""} max=${e.max??""} locale=${e.locale??""} .weekStartsOn=${e.weekStartsOn??0} ?showOutsideDays=${e.showOutsideDays!==!1} ?disabled=${e.disabled}></shadcn-calendar>`,r={args:{value:"",showOutsideDays:!0,weekStartsOn:0},render:a},t={args:{value:"2026-06-21",month:"2026-06",showOutsideDays:!0},render:a},n={args:{value:"2026-06-21",month:"2026-06",min:"2026-06-10",max:"2026-06-25"},render:a},o={args:{month:"2026-06",weekStartsOn:1,locale:"en-GB"},render:a},s={args:{value:"2026-06-21",month:"2026-06",disabled:!0},render:a};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: '',
    showOutsideDays: true,
    weekStartsOn: 0
  },
  render
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,i,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: '2026-06-21',
    month: '2026-06',
    showOutsideDays: true
  },
  render
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,h,O;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: '2026-06-21',
    month: '2026-06',
    min: '2026-06-10',
    max: '2026-06-25'
  },
  render
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var S,w,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    month: '2026-06',
    weekStartsOn: 1,
    locale: 'en-GB'
  },
  render
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,D,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: '2026-06-21',
    month: '2026-06',
    disabled: true
  },
  render
}`,...(v=(D=s.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const B=["Default","Selected","Constrained","MondayFirst","Disabled"];export{n as Constrained,r as Default,s as Disabled,o as MondayFirst,t as Selected,B as __namedExportsOrder,Y as default};
