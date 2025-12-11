import './index.css';
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { useEffect } from 'react';
import { registerLicense } from '@syncfusion/ej2-base';

export function App() {
  useEffect(() => {
    registerLicense('Ngo9BigBOggjHTQxAR8/V1JFaF1cXGFCf0x3RXxbf1x2ZFJMYlRbQXZPMyBoS35Rc0RhWH5ed3ZdQ2ReVEx/VEFc');
  }, []);

  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
          ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  </div>);
}

export default App;
