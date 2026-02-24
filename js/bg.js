// bg.js
const textBg = document.querySelector('.text-bg');

// Base string (replace with your full text)
const baseString = "tfcmrglezxnqkyisduawhobpcffgfexsuovqnoxyrccfbtuorugkihbyewnqsxacmdtlyrnxukwhzranoyqmcdgxlirsuweynaztorqhxdcmlguifopqgsjvmjkwnryxacoqsmhspvoexruoyzaqcmnwdsyrghtxluisvncmfeeywrnocxqlyatshzrdguiboeqcmnwarxyosludhtgzkisbut crynoaqmwxluzthsdkyxigtqsvohraxoycdqnmwzulsthgipvurmnoycaxqzutsdhlkigcfuxfforanoqxcywzdutslhkgmuifonaqrycxwzutlshkgmddsbdltcyrnoaqwxzydutslhkgmiefkhsxkjsopshipjfxhjhskkejoldgosfcskfjosocpxqrnowkgejscetq"; // truncated for example

// Repeat enough times to fill the screen
textBg.textContent = baseString.repeat(50); // 50 is safe; increase if needed
