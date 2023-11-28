import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';
const languages = [
    { label: 'English', value: '/auto/en' },
    { label: 'French', value: '/auto/fr' },
    { label: 'Italian', value: '/auto/it' },
    { label: 'German', value: '/auto/de' },
    { label: 'Polski', value: '/auto/pl' }

];
function GoogleTranslate() {


    const [selected, setSelected] = useState('en');
    const [reload, setReload] = useState(false);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'auto',
                autoDisplay: true,
                includedLanguages: "ru,en,pl,tr,de",
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                gaTrack: false, // Google'ın başlık çubuğunu gizlemek için
            },
            'google_translate_element'
        );
    };

    useEffect(() => {
        const addScript = document.createElement('script');
        addScript.setAttribute(
            'src',
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        if (hasCookie('googtrans')) {
            setSelected(getCookie('googtrans'));
        } else {
            setSelected('/auto/en');
        }

    }, []);


    const langChange = (e) => {
        setReload(true)
        if (hasCookie('googtrans')) {
            setCookie('googtrans', decodeURI(e.target.value));
            setSelected(e.target.value);
        } else {
            setCookie('googtrans', e.target.value);
            setSelected(e.target.value);
        }
        window.location.reload();
        setReload(false)
        const htmlTag = document.getElementsByTagName('html')[0];
        const iframe = document.getElementById(':2.container');
        if (iframe && htmlTag && htmlTag.classList.contains('translated-ltr')) {
            console.log('burya girdii');
            iframe.style.display = 'unvisible';
        }

    };

    // useEffect(() => {
    //     const iframe = document.getElementById(':2.container');
    //     if (iframe) {
    //         iframe.style.display = 'none';
    //     }
    // }, [reload]);
    useEffect(() => {
        const htmlTag = document.getElementsByTagName('html')[0];
        const iframe = document.getElementById(':2.container');
        if (iframe && htmlTag && htmlTag.classList.contains('translated-ltr')) {
            console.log('burya girdii');
            iframe.style.display = 'none';
        }
    }, [reload]);

    return (
        <>
            {/* <div id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%', zIndex: -99999 }}></div>
            <div>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    value={selected}
                    onChange={langChange}
                >
                    {languages.map((res, i) => (
                        <option key={i} value={res.value}>{res.label}</option>
                    ))}
                </select>
            </div> */}

            <div id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%', zIndex: -99999 }}></div>
            <SelectPicker
                data={languages}
                style={{ width: 100 }}
                placement="bottomEnd"
                cleanable={false}
                value={selected}
                searchable={false}
                className={'form-select'}
                menuClassName={'notranslate'}
                onSelect={(e, m, evt) => langChange(e, m, evt)}
                placeholder="Lang" />
        </>
    );
}

export default GoogleTranslate;
