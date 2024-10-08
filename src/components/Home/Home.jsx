import './Home.css'
import { useContext } from 'react'
import GlobalStore from '../../contexts/GlobalStore/GlobalStore'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function Home() {

    const globalStore = useContext(GlobalStore);
    const { inputFile, setInputFile, serverRes, parsePdf, loading, setLoading } = globalStore;

    const handleFileUpload = (event) => {
        setInputFile(event.target.files[0])
    }

    const handleParseBtn = () => {
        console.log("inputFile: ", inputFile);
        setLoading(true);
        parsePdf();
    }

    return (
        <div>
            <div className='container'>
            
               <h1 className='resume'>Resume Parser</h1>
               <p className='subhead'>A tool to parse resumes using OpenAI's GPT API. </p>
               <h4 className='heading'> Instructions </h4>
                <p className="subhead">Upload a pdf and the parsed result will be provided as YAML.
                 It is not straight forward to standardize a resume but Gemini does it really well. Backend is in JavaScript and uses  🦜️🔗 LangChain.</p>

               <p className='heading'>It takes few minutes to process.</p>

            <div className='io-container'>
                <div className="input-container">
                <label className='selectfile' for="file">Select your PDF file:</label>
                    <input className='file-name' type="file" accept='application/pdf' name='inputFile' onChange={handleFileUpload} />
                    <button className='parse-btn' onClick={handleParseBtn} disabled={inputFile ? false : true}>Parse</button>
                </div>
                <pre className='result-section'>
                    {loading ? <LoadingSpinner /> : serverRes}
                </pre>
            </div>
        </div>
        </div>


        
    )
}
