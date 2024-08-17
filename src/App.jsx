import './App.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, { useState } from 'react';

function App() {

  const formats = ['png', 'base64'];
  const sizes = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

  const [qr, setQr] = useState("")
  const [isActive, setActive] = useState(false);
  const [text, setText] = useState("");
  const [format, setFormat] = useState('png');
  const [margin, setMargin] = useState(4);
  const [sizeValue, setSizeValue] = useState(150);
  const [backgroundcolor, setBackgroundColor] = useState('000000');
  const [color, setColor] = useState('ffffff');
  const [image, setImage] = useState("");
  const [imageRatio, setImageRatio] = useState(0.3);
  const [caption, setCaption] = useState("");
  const [fontfamily, setFontFamily] = useState('sans-serif');
  const [fontsize, setFontSize] = useState(10);
  const [down, setDown] = useState("")


  const qrcode = async () => {
    let response;
    if (image == "") {
      response = await fetch(`https://quickchart.io/qr?text=${text}&dark=${color}&light=${backgroundcolor}&ecLevel=Q&format=${format}&size=${sizeValue}&margin=${margin}&caption=${caption}&captionFontFamily=${fontfamily}&captionFontSize=${fontsize}`);
    }
    else {
      response = await fetch(`https://quickchart.io/qr?text=${text}&dark=${color}&light=${backgroundcolor}&ecLevel=Q&format=${format}&size=${sizeValue}&centerImageSizeRatio=${imageRatio}&centerImageUrl=${image}&caption=${caption}&captionFontFamily=${fontfamily}&captionFontSize=${fontsize}`);
    }
    setQr(response.url);
    setDown(response);
  };

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputString = text;
    const byteSize = calculateBytes(inputString);

    if (text === "") {
      alert("Please fill Text Field");
      return;
    }

    if (byteSize > 1669) {
      alert("The Amout of data is too bid to store in QR Code");
      return
    }

    qrcode();
    ToggleClass();
  }

  const handleFormatChange = (option) => {
    setFormat(option.value);
  }

  const handleImageRatioChange = (option) => {
    setImageRatio(option.value);
  }

  const handleDownload = async () => {
    try {
      const response = down;
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "QRCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Error in Downloading the QR Code");
      console.log(error);
    }
  };

  const handleShare = async () => {
    try {
      const response = down;
      const blob = await response.blob();
      const clipboardItem = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([clipboardItem]);
      alert("QR Code image copied to clipboard!");
    } catch (error) {
      alert("Error copying image to clipboard");
      console.log(error);
    }
  };

  const handleBack = () => {
    ToggleClass();
  }

  function calculateBytes(inputString) {
    const encoder = new TextEncoder();
    const encodedString = encoder.encode(inputString);
    return encodedString.length;
  }

  return (
    <>
      <div className='bg-[#111729] background flex justify-center items-center duration-1000 flex-col gap-10 font-mono text-sm' style={isActive ? { height: "100vh" } : { height: caption != "" ? "130vh" : "120vh" }}>
        <div className="text-blue-700 font-['Roboto'] uppercase text-4xl">QRCode Generator</div>
        <div className='flex justify-center items-center w-full '>

          <div className='flex-col justify-center items-center gap-10' style={{ display: isActive ? "flex" : "none" }}>
            <div className='relative z-20 flex justify-center items-center'>
              <div className='bg-[#1e2c51] rounded-full absolute w-[280px] h-[280px] -z-10'></div>
              <img className='z-10 rounded-xl w-[240px] h-[240px]' src={qr} alt="QR Code" />
            </div>
            <div className='text-white'>
              (When you download or share it, you will get {sizeValue} X {sizeValue} QR Code.)
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-around items-center flex-row gap-10 text-white font-medium w-full'>
                <button className='py-[10px] px-[20px] bg-[#3662e3] w-[120px] text-sm text-white border-none rounded-lg cursor-pointer' onClick={handleDownload}>Download</button>
                <button className='py-[10px] px-[20px] bg-[#3662e3] w-[120px] text-sm text-white border-none rounded-lg cursor-pointer' onClick={handleShare}>Share</button>
              </div>
              <button onClick={handleBack} className='py-[10px] px-[20px] bg-[#3662e3] text-white border-none rounded-lg cursor-pointer'>Back Page</button>
            </div>
          </div>

          <form action="" onSubmit={handleSubmit} className='flex flex-col justify-between text-[#a5afc2] font-medium border-2 border-[#3662e3] bg-[#030617] p-10 rounded-3xl duration-1000' style={{ height: caption != "" ? "750px" : "670px", display: isActive ? "none" : "flex" }}>
            <div className='flex flex-col gap-10 h-max'>
              <label className='flex justify-between items-center w-full'>
                <div>Text: <span className='text-red-500'>*</span></div>
                <input onInput={e => setText(e.target.value)} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="text" name="text" required />
              </label>
              <label className='flex justify-between items-center gap-10 w-full'>
                <div>Format:</div>
                <Dropdown options={formats.map(format => ({ value: format, label: format }))} onChange={handleFormatChange} placeholder="Select an option" className='w-48 font-normal' />
              </label>
              <div className='flex flex-row justify-between items-center gap-10'>
                <label className='flex flex-col justify-center items-start gap-3'>
                  <div>Size:</div>
                  <input onInput={e => setSizeValue(e.target.value)} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="number" placeholder='150px' />
                </label>
                {caption == "" && image == "" && (
                  <label className='flex flex-col justify-center items-start gap-3 duration-700 transition ease-in-out opacity-100 translate-y-0' >
                    <div>Margin (in px):</div>
                    <input onInput={e => setMargin(e.target.value)} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="number" placeholder='4px' />
                  </label>
                )}
              </div>

              <div className='flex flex-row justify-between items-center gap-10'>
                <label className='flex flex-col justify-center items-start gap-3'>
                  <div>Background Color:</div>
                  <input onInput={e => setBackgroundColor(e.target.value.replace(/^#/, ''))} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="text" placeholder='FFFFFF' />
                </label>
                <label className='flex flex-col justify-center items-start gap-3'>
                  <div>QR Code Color:</div>
                  <input onInput={e => setColor(e.target.value.replace(/^#/, ''))} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="text" placeholder='000000' />
                </label>
              </div>

              <div className='flex flex-col gap-6'>
                <label className='flex  justify-between items-center gap-10 w-full'>
                  <div>Image in QR:</div>
                  <input onInput={e => setImage(e.target.value)} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="text" placeholder='URL' />
                </label>

                <div className='flex flex-col gap-4'>
                  {image != "" && (
                    <label className='flex justify-between items-center gap-10 w-full'>
                      <div>Image Size Ratio</div>
                      <Dropdown options={sizes.map(size => ({ value: size, label: size }))} onChange={handleImageRatioChange} placeholder="Select an option" className='w-48 font-normal' />
                    </label>
                  )}
                </div>
              </div>

              <div className='flex flex-col gap-6'>
                <label className='flex justify-between items-center gap-10 w-full'>
                  <div>Caption:</div>
                  <input onInput={e => setCaption(e.target.value)} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="text" />
                </label>

                {caption != "" && (
                  <div className='flex gap-10 duration-200'>
                    <label className='flex flex-col justify-center items-start gap-3'>
                      <div>Font Family:</div>
                      <input onInput={e => setFontFamily(e.target.value)} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="number" placeholder='Sans-Serif' />
                    </label>
                    <label className='flex flex-col justify-center items-start gap-3'>
                      <div>Font Size:</div>
                      <input onInput={e => setFontSize(e.target.value)} className='font-normal p-1 px-3 text-black outline-none rounded-sm w-48' type="number" placeholder='10px' />
                    </label>
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-around items-center flex-row gap-20 text-white font-medium'>
              <button type="submit" className='bg-[#3662e3] px-10 py-3 rounded-md'>Submit</button>
              <button type="reset" className='bg-[#3662e3] px-10 py-3 rounded-md'>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
