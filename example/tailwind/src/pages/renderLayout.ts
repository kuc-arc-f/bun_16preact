
let PATH__FAVICON = "/favicon.ico";
let PATH__ENTRY_CLIENT = "/static/entry-client.js";
let PATH__CSS_GLOBAL = "/static/index.css";
//
export default function Compo(props: any) {
  //production
  if(process.env.NODE_ENV === "production") {
    PATH__CSS_GLOBAL = "/public/static/index.css";
  }
//console.log("renderLayout.env.PROD=", import.meta.env.PROD);
  //
  const html = `<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${props.title}</title>
    <link href="${PATH__CSS_GLOBAL}" rel="stylesheet" />
  </head>
  <body> 
    ${props.children}
  </body></html>
  `
  return html;
}
/*
    <hr />        
    <div>
      <a href="/">[ home ]</a>
      <a href="/htmx2">[ htmx2 ]</a>
      <a href="/htmx3">[ htmx3 ]</a>
    </div>
*/