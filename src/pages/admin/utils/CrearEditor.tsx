import { Editor } from '@tinymce/tinymce-react';

export default function CrearEditor({traerInfo}: any) {
  const editorRef = traerInfo

  const valorInicial = '<table style="border-collapse: collapse; width: 100%; height: 98.8px; border-width: 0px; border-style: hidden;" border="1"><colgroup><col style="width: 33.3333%;"><col style="width: 33.3333%;"><col style="width: 33.3333%;"></colgroup><tbody><tr style="height: 98.8px;"><td style="text-align: center; height: 98.8px; border-width: 0px;"><img src="https://cdn.btecvi.com/btecvi.jpg" alt="" width="70" height="79"></td><td style="text-align: center; height: 98.8px; border-width: 0px;"><p style="line-height: 1;"><strong><span style="font-size: 14pt;">BACHILLERATO TECNOL&Oacute;GICO DE VILLAREAL</span></strong></p></td><td style="text-align: center; height: 98.8px; border-width: 0px;"><img src="https://cdn.btecvi.com/elemental/dgeti_logo.jpg" alt="" width="79" height="73"></td></tr></tbody></table><p>-</p><p>Remplazar texto a partir de aqui.</p>'
  return (
    <div style={{ maxWidth: '1200px', margin: '15px 5px'}}>
      <Editor
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={valorInicial}
        init={{
          height: 600,
          menubar: true,
          language: 'es_419',
          plugins: [
            'advlist', 'lists', 'link', 'image', 'charmap', 'preview',
            'visualblocks', 'code', 'fullscreen', 'media', 'table', 'wordcount'
          ],
          toolbar: 'undo redo | bold italic charmap | fontsize | ' +
            'forecolor backcolor | link image media | | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist | ' +
            'removeformat | preview fullscreen',
          content_style: "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif }"
        }}
      />
    </div>
  );
}
// <button onClick={log}>Mostrar codigo</button>