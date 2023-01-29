import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function CrearEditor() {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
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
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Mostrar codigo</button>
    </>
  );
}