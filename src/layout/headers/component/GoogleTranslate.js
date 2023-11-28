import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";



function GoogleTranslate() {

    const [selected, setSelected] = useState('FR');


    function getCookie(name) {
        const cookieName = `${name}=`;
        const decodedCookies = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookies.split(';');

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return null;
    }

    function setCookie(name, value, days) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + expirationDate.toUTCString();

        document.cookie = name + "=" + decodeURI(value) + ";" + expires + ";path=/";
    }

    function hasCookie(name) {
        const cookieValue = getCookie(name);
        return cookieValue !== null;
    }

    function createCookie(name, value, days, domain) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else { var expires = ""; }
        document.cookie = name + "=" + value + expires + "; domain=" + domain + "; path=/";
    }


    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'auto',
                autoDisplay: false,
                includedLanguages: "us,en,pl,de,it,fr",
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
            setSelected(getCookie('googtrans').toLowerCase());
        } else {
            setSelected('/auto/us');
        }
        if (hasCookie('googtrans')) {

        } else {
            setCookie('stt', 1);
        }
    }, []);


    const langChange = (e) => {
        const degerler = ["US", "FR", "IT", "DE", "PL"];
        const randomIndex = Math.floor(Math.random() * degerler.length);
        // const al = degerler[randomIndex].toLowerCase();
        const al = e.toLowerCase();
        // setCookie('googtrans', String("/auto/" + String(al.toLowerCase())), 100);
        // setCookie('googtrans', "/auto/" + e.toLowerCase(), 100);
        setSelected("/auto/" + e.toLowerCase());

        setCookie('stt', (getCookie("stt")) + "/" + 1);


        createCookie('googtrans', '/auto/' + al, 1, '');
        createCookie('googtrans', '/auto/' + al, 1, 'zenkaeurope.com');

        setTimeout(myGreeting, 1000)
    };
    function myGreeting() {
        window.location.reload();
    }

    return (
        <>
            <div id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%', zIndex: -99999 }}></div>
            {/* <div>
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
            <div style={{ width: "150px" }}>
                <ReactFlagsSelect
                className={"aassdd"}
                    countries={["US", "FR", "IT", "DE", "PL"]}
                    customLabels={{ US: "English", FR: "French", IT: "Italian", DE: "German", PL: "Polski" }}
                    selected={selected ? selected.replace("/auto/", "").toUpperCase() : "FR"}
                    onSelect={(code) => langChange(code)}
                    placeholder="Select a language"
                />
            </div>


            {/* <div id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%', zIndex: -99999 }}></div>
            <SelectPicker
                data={languages}
                style={{ width: 500 }}
                placement="bottomEnd"
                cleanable={false}
                value={selected}
                searchable={false}
                className={'notranslate'}
                menuClassName={'notranslate'}
                onSelect={(e, m, evt) => langChange(e, m, evt)}
                placeholder="Lang" /> */}
        </>
    );
}

export default GoogleTranslate;
