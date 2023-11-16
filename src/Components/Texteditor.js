import React, { useState, useRef } from 'react';
import JoditEditor,{Jodit} from 'jodit-react';

const Texteditor = () => {

    // const editor = useRef(null);
	const [content, setContent] = useState('');
	const config = { // Define your Jodit editor configuration options here
		// Example configuration options:
		autofocus: true,
		height: "auto",
		toolbarAdaptive: false,
		// Add more options as needed
	  };
	//   const plaintext = Jodit.modules.Helpers.stripTags(content); used to reflact which entered in text editor

  return (
    <>
          <div className='container pt-5 pb-5'>

    <h3 className='pb-2'>Add Applications, Fetures, Specfications</h3>


    <JoditEditor
		
			value={content}
			config={config}

			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons

		/>

    {/* <p>{plaintext}</p> reflact all text which entered in texteditor */}
	</div>
    
    </>
  )
}

export default Texteditor;
