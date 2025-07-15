// ==UserScript==
// @name         Intake SOM
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  Intake inladen voor SOM
// @match        *://*/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/anzwerz/som-koppeling/main/intake_SOM.user.js
// @updateURL    https://raw.githubusercontent.com/anzwerz/som-koppeling/main/intake_SOM.user.js
// ==/UserScript==


//versie test

(function() {
    'use strict';
window.addEventListener('load', function() {



function getClientNumber() {
    console.log('window.parent.parent.frames.length:', window.parent.parent.frames.length);

        // Pak de derde frame (index 2) uit het frameset
        const mainframe = window.parent.parent.frames[2]; // of window.frames['mainframe']

        if (!mainframe) {
            console.error('Mainframe (derde frame) niet gevonden');
            return null;
        }

        // Pak het document uit de frame
        const frameDoc = mainframe.document;

        if (!frameDoc) {
            console.error('Kan niet bij frame document');
            return null;
        }

        console.log('Frame document gevonden');
        const container = frameDoc.getElementById('tab_contents3');
        console.log(container);

    if (!container) return null;

    // Zoek de tweede <tr> binnen de container
    const rows = container.querySelectorAll('table tbody tr');
    if (rows.length >= 2) {
        const secondRow = rows[1];
        const lastCell = secondRow.lastElementChild;

        if (lastCell) {
            const text = (lastCell.textContent || lastCell.innerText).trim();
            const numberMatch = text.match(/\d+/);
            if (numberMatch) {
                return numberMatch[0];
            }
        }
    }

    return null;
}


     const clientNumber = getClientNumber(); //'0606'
     console.log('Clientnummer:', clientNumber);


    if (clientNumber === null){
     console.log("kan clientnummer niet vinden");
    }


    fetch("https://whisper.anzwerz.ai/api/get_intake_data/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'mijn-geheime-sleutel'
        },
        body: JSON.stringify({ patientnummer: String(clientNumber) })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Snowflake resultaat:', data);
        const binnenkomst = data.response.binnenkomst;
        const verwijzer = data.response.verwijzer;
        const verwijsdatum = data.response.verwijsdatum;
        const verwijsdiagnose = data.response.verwijsdiagnose;
        const verrichtingGewenst = data.response.verrichting_gewenst;
        const regio = data.response.regio;
        const toelichtingAfwijkendBeloop = data.response.toelichting_afwijkend_beloop;
        const conclusieScreening = data.response.conclusie_screening;
        const aanbevelingVervolg = data.response.aanbeveling_vervolg;
        const indicatieVoorVerderFysio = data.response.indicatie_voor_verder_fysio;
        const akkoordOverdrachtHa = data.response.akkoord_overdracht_ha;
        const omschrijvingKlacht = data.response.omschrijving_klacht;
        const duurKlachtAantal = data.response.duur_klacht_aantal;
        const duurKlachtEenheid = data.response.duur_klacht_eenheid;
        const hulpvraag = data.response.hulpvraag;
        const recidief = data.response.recidief;
        const ongeval = data.response.ongeval;
        const beloop = data.response.beloop;
        const beloopTotNu = data.response.beloop_tot_nu;
        const pijn = data.response.pijn;
        const stijfheid = data.response.stijfheid;
        const psk1Activiteit = data.response.psk1_activiteit;
        const psk1Score = data.response.psk1_score;
        const psk2Activiteit = data.response.psk2_activiteit;
        const psk2Score = data.response.psk2_score;
        const psk3Activiteit = data.response.psk3_activiteit;
        const psk3Score = data.response.psk3_score;
        const stoornissen = data.response.stoornissen;
        const beperkingen = data.response.beperkingen;
        const participatie = data.response.participatie;
        const medischeFactoren = data.response.medische_factoren;
        const omgevingsdeterminanten = data.response.omgevingsdeterminanten;
        const persoonlijkeDeterminanten = data.response.persoonlijke_determinanten;
        const wijzeVanOmgang = data.response.wijze_van_omgang;
        const factorenVanInvloed = data.response.factoren_van_invloed;
        const belangrijkeOpmerkingen = data.response.belangrijke_opmerkingen;
        const verwachtHerstelPatient = data.response.verwacht_herstel_patient;
        const verwachteDuurPatientAantal = data.response.verwachte_duur_patient_aantal;
        const verwachteDuurPatientEenheid = data.response.verwachte_duur_patient_eenheid;
        const verwachtHerstelPatientDD = data.response.verwacht_herstel_patient_dropdown;
        const voorlopigeConlusie = data.response.voorlopige_conclusie;
        const toestemmingPatient = data.response.toestemming_patient;
        const toestemmingBijzondereBehandeling = data.response.toestemming_bijzondere_behandeling;
        const toelichtingBijzondereBehandeling = data.response.toelichting_bijzondere_behandeling;
        const conclusieAnamnese = data.response.conclusie_anamnese;
        const indicatieFysio = data.response.indicatie_fysio;
        const inspectie = data.response.inspectie;
        const dynamisch = data.response.dynamisch;
        const statisch = data.response.statisch;
        const overig = data.response.overig;
        const palpatie = data.response.palpatie;
        const hoofddoel = data.response.hoofddoel;
        const verwachtHerstelFysio = data.response.verwacht_herstel_fysio; //wordt niet gebruikt
        const verwachteDuurFysioAantal = data.response.verwachte_duur_fysio_aantal;
        const verwachteDuurFysioEenheid = data.response.verwachte_duur_fysio_eenheid;
        const verwachtHerstelFysioDD = data.response.verwacht_herstel_fysio_dropdown;
        const werkdiagnose = data.response.werkdiagnose;


        console.log(binnenkomst);
        console.log(verwijzer);
        console.log(verwijsdatum);
        console.log(verwijsdiagnose);
        console.log(verrichtingGewenst);
        console.log(regio);
        console.log(toelichtingAfwijkendBeloop);
        console.log(conclusieScreening);
        console.log(aanbevelingVervolg);
        console.log(indicatieVoorVerderFysio);
        console.log(akkoordOverdrachtHa);
        console.log(omschrijvingKlacht);
        console.log(duurKlachtAantal);
        console.log(duurKlachtEenheid);
        console.log(hulpvraag);
        console.log(recidief);
        console.log(ongeval);
        console.log(beloop);
        console.log(beloopTotNu);
        console.log(pijn);
        console.log(stijfheid);
        console.log(psk1Activiteit);
        console.log(psk1Score);
        console.log(psk2Activiteit);
        console.log(psk2Score);
        console.log(psk3Activiteit);
        console.log(psk3Score);
        console.log(stoornissen);
        console.log(beperkingen);
        console.log(participatie);
        console.log(medischeFactoren);
        console.log(omgevingsdeterminanten);
        console.log(persoonlijkeDeterminanten);
        console.log(wijzeVanOmgang);
        console.log(factorenVanInvloed);
        console.log(belangrijkeOpmerkingen);
        console.log(verwachtHerstelPatient);
        console.log(verwachteDuurPatientAantal);
        console.log(verwachteDuurPatientEenheid);
        console.log(voorlopigeConlusie);
        console.log(toestemmingPatient);
        console.log(toestemmingBijzondereBehandeling);
        console.log(toelichtingBijzondereBehandeling);
        console.log(conclusieAnamnese);
        console.log(indicatieFysio);
        console.log(inspectie);
        console.log(dynamisch);
        console.log(statisch);
        console.log(overig);
        console.log(palpatie);
        console.log(hoofddoel);
        console.log(verwachtHerstelFysio);
        console.log(verwachteDuurFysioAantal);
        console.log(verwachteDuurFysioEenheid);



        //Aanmelding & Screening

        const klachtomschrijvingEl = document.getElementById('t202_klachtomschrijving');
        if (klachtomschrijvingEl && klachtomschrijvingEl.innerHTML == '') {
            if (klachtomschrijvingEl && omschrijvingKlacht) {
                klachtomschrijvingEl.innerHTML = omschrijvingKlacht;
            }
        

            const binnenkomst3El = document.getElementById('t202_binnenkomst3');
            if (binnenkomst3El && binnenkomst && binnenkomst.toUpperCase() === 'DTF') {
                binnenkomst3El.checked = true;
            }

            const binnenkomst1El = document.getElementById('t202_binnenkomst1');
            if (binnenkomst1El && binnenkomst && binnenkomst.toLowerCase() === 'verwijzing') {
                binnenkomst1El.checked = true;
            }

            const verwijsdatumEl = document.getElementById('t202_verwijsdatum');
            if (verwijsdatumEl && verwijsdatum) {
                verwijsdatumEl.value = verwijsdatum;
            }

            const verwijzerbeleidEl = document.getElementById('t202_verwijzerbeleid');
            if (verwijzerbeleidEl && verwijzer) {
                verwijzerbeleidEl.innerHTML = verwijzer;
            }

            const dienstgewenstEl = document.getElementById('t202_dienstgewenst');
            if (dienstgewenstEl && verrichtingGewenst) {
                dienstgewenstEl.innerHTML = verrichtingGewenst;
                
            }
 

            const klachtensindsgetalEl = document.getElementById('t203_klachtensindsgetal');
            if (klachtensindsgetalEl && duurKlachtAantal) {
                klachtensindsgetalEl.value = duurKlachtAantal;
                
            }

            const klachtenSindsMaatEl = document.getElementById('t203_klachtenSindsMaat');
            if (klachtenSindsMaatEl) {
                let dropdownValue = 1; // default waarde

                if (duurKlachtEenheid) {
                    const eenheid = duurKlachtEenheid.toLowerCase();

                    if (eenheid === 'dagen') {
                        dropdownValue = 'dag';
                    } else if (eenheid === 'weken') {
                        dropdownValue = 'week';
                    } else if (eenheid === 'maanden') {
                        dropdownValue = 'maand';
                    } else if (eenheid === 'jaren') {
                        dropdownValue = 'jaar';
                    }
                }

                klachtenSindsMaatEl.value = dropdownValue;
            }

            const recidief0El = document.getElementById('t202_recidief0');
            if (recidief0El && recidief && recidief.toLowerCase() === 'nee') {
                recidief0El.checked = true;
            }

            const recidief1El = document.getElementById('t202_recidief1');
            if (recidief1El && recidief && recidief.toLowerCase() === 'ja') {
                recidief1El.checked = true;
            }

            const indicatieongeval0El = document.getElementById('t24_indicatieongeval0');
            if (indicatieongeval0El && ongeval && ongeval.toLowerCase() === 'nee') {
                indicatieongeval0El.checked = true;
            }

            const indicatieongeval1El = document.getElementById('t24_indicatieongeval1');
            if (indicatieongeval1El && ongeval && ongeval.toLowerCase() === 'ja') {
                indicatieongeval1El.checked = true;
            }


            //TODO: regio screening

            const pluis1El = document.getElementById('pluis1');
            if (pluis1El && conclusieScreening && conclusieScreening.toLowerCase() === 'niet pluis') {
                pluis1El.checked = true;
            }

            const pluis0El = document.getElementById('pluis0');
            if (pluis0El && conclusieScreening && conclusieScreening.toLowerCase() === 'pluis') {
                pluis0El.checked = true;
            }

            

            const afwijkendBeloopEl = document.getElementById('t202_AfwijkendBeloop');
            if (afwijkendBeloopEl && toelichtingAfwijkendBeloop) {
                afwijkendBeloopEl.innerHTML = toelichtingAfwijkendBeloop;
            }

            const aanbevelingEl = document.getElementById('t202_aanbeveling');
            if (aanbevelingEl && aanbevelingVervolg) {
                aanbevelingEl.innerHTML = aanbevelingVervolg;
            }

            
            const indicatieonderzoekaanmelding1El = document.getElementById('t202_indicatieonderzoekaanmelding1');
            if (indicatieonderzoekaanmelding1El && indicatieVoorVerderFysio && indicatieVoorVerderFysio.toLowerCase() === 'nee') {
                indicatieonderzoekaanmelding1El.checked = true;
            }

            const indicatieonderzoekaanmelding0El = document.getElementById('t202_indicatieonderzoekaanmelding0');
            if (indicatieonderzoekaanmelding0El && indicatieVoorVerderFysio && indicatieVoorVerderFysio.toLowerCase() === 'ja') {
                indicatieonderzoekaanmelding0El.checked = true;
            }

            const toestemmingoverleg0El = document.getElementById('t206_toestemmingoverleg0');
            if (toestemmingoverleg0El && akkoordOverdrachtHa && akkoordOverdrachtHa.toLowerCase() === 'ja') {
                toestemmingoverleg0El.checked = true;
            }

            const toestemmingoverleg1El = document.getElementById('t206_toestemmingoverleg1');
            if (toestemmingoverleg1El && akkoordOverdrachtHa && akkoordOverdrachtHa.toLowerCase() === 'nee') {
                toestemmingoverleg1El.checked = true;
            }
        
        }



        //Anamnese

        const hulpvraagEl = document.getElementById('t203_hulpvraag');
        if (hulpvraagEl && hulpvraagEl.innerHTML == '') {

            if (hulpvraagEl && hulpvraag) {
                hulpvraagEl.innerHTML = hulpvraag;
            }
        

            const locatieaardoorzaakEl = document.getElementById('t203_locatieaardoorzaak');
            if (locatieaardoorzaakEl && beloop) {
                locatieaardoorzaakEl.innerHTML = beloop;
            }



            const beloopIdEl = document.getElementById('t203_beloopId');
            if (beloopIdEl) {
                let dropdownValue = 0; // default waarde

                if (beloopTotNu) {
                    const beloopText = beloopTotNu.toLowerCase();
                    console.log(beloopText);

                    if (beloopText.includes('niets vastgelegd')) {
                        dropdownValue = 803;
                    } else if (beloopText.includes('afgenomen')) {
                        dropdownValue = 755;
                    } else if (beloopText.includes('niet gewijzig')) {
                        dropdownValue = 802;
                    } else if (beloopText.includes('toegenomen')) {
                        dropdownValue = 804;
                    } else if (beloopText.includes('wisselend')) {
                        dropdownValue = 801;
                    }
                }

                beloopIdEl.value = dropdownValue;
            }

                        
            const pijnRadioButtons = document.querySelectorAll('input[name="pijn"]');
            if (pijnRadioButtons && pijn) {

                pijnRadioButtons.forEach(radio => {
                    if (radio.value === pijn) {
                        radio.checked = true;
                    }
                });
                }


            const stijfheidRadioButtons = document.querySelectorAll('input[name="stijfheid"]');
            if (stijfheidRadioButtons && stijfheid) {
                stijfheidRadioButtons.forEach(radio => {
                    if (radio.value === stijfheid) {
                        radio.checked = true;
                    }
                });
            }
                        

        const activiteit1El = document.getElementById('Activiteit1');
            if (activiteit1El && psk1Activiteit) {
                activiteit1El.innerHTML = psk1Activiteit;
            }

            const slider1 = document.getElementById('psk1');
            if (slider1 && !isNaN(psk1Score) && psk1Score.trim() !== ''){
       
                const score1 = parseInt(psk1Score, 10) * 10;
                // Nu is score een getal
                console.log(score1); // bijvoorbeeld: 85
            
                let nextSibling = slider1.nextElementSibling;
                if (nextSibling && nextSibling.tagName.toLowerCase() === 'span') {
                    nextSibling.textContent = score1;
                }

                slider1.value = score1;
    
                // Events triggeren voor compatibiliteit
                slider1.dispatchEvent(new Event('input', { bubbles: true }));
                slider1.dispatchEvent(new Event('change', { bubbles: true }));
            }
        

            const activiteit2El = document.getElementById('Activiteit2');
            if (activiteit2El && psk2Activiteit) {
                activiteit2El.innerHTML = psk2Activiteit;
            }

            const slider2 = document.getElementById('psk2');
            if (slider2 && !isNaN(psk2Score) && psk2Score.trim() !== ''){
       
                const score2 = parseInt(psk2Score, 10) * 10;
                // Nu is score een getal
                console.log(score2); // bijvoorbeeld: 85
                let nextSibling = slider2.nextElementSibling;
                if (nextSibling && nextSibling.tagName.toLowerCase() === 'span') {
                    nextSibling.textContent = score2;
                }
                slider2.value = score2;
        
                // Events triggeren voor compatibiliteit
                slider2.dispatchEvent(new Event('input', { bubbles: true }));
                slider2.dispatchEvent(new Event('change', { bubbles: true }));
            }

            const activiteit3El = document.getElementById('Activiteit3');
            if (activiteit3El && psk3Activiteit) {
                activiteit3El.innerHTML = psk3Activiteit;
            }

            const slider3 = document.getElementById('psk3');
            if (slider3 && !isNaN(psk3Score) && psk3Score.trim() !== ''){
       
                const score3 = parseInt(psk3Score, 10) * 10;
                // Nu is score een getal
                console.log(score3); // bijvoorbeeld: 85
                let nextSibling = slider3.nextElementSibling;
                if (nextSibling && nextSibling.tagName.toLowerCase() === 'span') {
                    nextSibling.textContent = score3;
                }
                slider3.value = score3;
        
                // Events triggeren voor compatibiliteit
                slider3.dispatchEvent(new Event('input', { bubbles: true }));
                slider3.dispatchEvent(new Event('change', { bubbles: true }));
            }

            const stoornisFunctieEl = document.getElementById('t204_StoornisFunctie');
            if (stoornisFunctieEl && stoornissen) {
                stoornisFunctieEl.innerHTML = stoornissen;
            }

            const beperkingActiviteitenEl = document.getElementById('t204_BeperkingActiviteiten');
            if (beperkingActiviteitenEl && beperkingen) {
                beperkingActiviteitenEl.innerHTML = beperkingen;
            }

            const participatieproblemenEl = document.getElementById('t204_participatieproblemen');
            if (participatieproblemenEl && participatie) {
                participatieproblemenEl.innerHTML = participatie;
            }

            const medischefactorenEl = document.getElementById('t204_medischefactoren');
            if (medischefactorenEl && medischeFactoren) {
                medischefactorenEl.innerHTML = medischeFactoren;
            }

            const externefactorenEl = document.getElementById('t204_externefactoren');
            if (externefactorenEl && omgevingsdeterminanten) {
                externefactorenEl.innerHTML = omgevingsdeterminanten;
            }

            const externefactoren1El = document.getElementById('t204_externefactoren1');
            if (externefactoren1El){
                if (!omgevingsdeterminanten || omgevingsdeterminanten.trim() === '') {
                    externefactoren1El.checked = true;
                } else {
                    externefactoren1El.checked = false;
                }
            }

            const persoonlijkefactorenEl = document.getElementById('t204_persoonlijkefactoren');
            if (persoonlijkefactorenEl && persoonlijkeDeterminanten) {
                persoonlijkefactorenEl.innerHTML = persoonlijkeDeterminanten;
            }


            const persoonlijkefactoren1El = document.getElementById('t204_persoonlijkefactoren1');
            if (persoonlijkefactoren1El){
                if(!persoonlijkeDeterminanten || persoonlijkeDeterminanten.trim() === '') {
                persoonlijkefactoren1El.checked = true;
            } else {
                persoonlijkefactoren1El.checked = false;
            }
            }

            const omgangswijzeEl = document.getElementById('t203_omgangswijze');
            if (omgangswijzeEl && wijzeVanOmgang) {
                omgangswijzeEl.innerHTML = wijzeVanOmgang;
            }

            const omgangswijze1El = document.getElementById('t203_omgangswijze1');
            if (omgangswijze1El){
                if (!wijzeVanOmgang || wijzeVanOmgang.trim() === '') {
                omgangswijze1El.checked = true;
            } else {
                omgangswijze1El.checked = false;
            }
            }

            const invloedfactorenEl = document.getElementById('t203_invloedfactoren');
            if (invloedfactorenEl && factorenVanInvloed) {
                invloedfactorenEl.innerHTML = factorenVanInvloed;
            }

            
            const invloedfactoren1El = document.getElementById('t203_invloedfactoren1');
            if (invloedfactoren1El){
                if(!factorenVanInvloed || factorenVanInvloed.trim() === '') {
                invloedfactoren1El.checked = true;
            } else {
                invloedfactoren1El.checked = false;
            }
            }

            const belangrijkeOpmerkingenEl = document.getElementById('t203_BelangrijkeOpmerkingen');
            if (belangrijkeOpmerkingenEl && belangrijkeOpmerkingen) {
                belangrijkeOpmerkingenEl.innerHTML = belangrijkeOpmerkingen;
            }


            const verwachtHerstelPatientEl = document.getElementById('t203_verwachthersteldropdown');
            if (verwachtHerstelPatientEl) {

                let dropdownValue = 0; // default waarde


                if (verwachtHerstelPatientDD) {
                    

                    if (verwachtHerstelPatientDD.includes('progressie')) {
                        dropdownValue = 572;
                    } else if (verwachtHerstelPatientDD.includes('geringe')) {
                        dropdownValue = 569;
                    } else if (verwachtHerstelPatientDD.includes('matige')) {
                        dropdownValue = 567;
                    } else if (verwachtHerstelPatientDD.includes('bepalen')) {
                        dropdownValue = 800;
                    } else if (verwachtHerstelPatientDD.includes('Onderhoud')) {
                        dropdownValue = 565;
                    } else if (verwachtHerstelPatientDD.includes('klachten')) {
                        dropdownValue = 571;
                    } else if (verwachtHerstelPatientDD.includes('Stabilisatie')) {
                        dropdownValue = 573;
                    } else if (verwachtHerstelPatientDD.includes('herstel')) {
                        dropdownValue = 568;
                    }
                }

                verwachtHerstelPatientEl.value = dropdownValue;
            }


            const behandelepisodeverwachtingEl = document.getElementById('t206_behandelepisodeverwachting');
            if (behandelepisodeverwachtingEl && verwachteDuurPatientAantal) {
                behandelepisodeverwachtingEl.value = verwachteDuurPatientAantal;
            }



            const herstelverwachtingperiodeEl = document.getElementById('t206_herstelverwachtingperiode');
            if (herstelverwachtingperiodeEl) {
                let dropdownValue = 1; // default waarde

                if (verwachteDuurPatientEenheid) {
                    const eenheid = verwachteDuurPatientEenheid.toLowerCase();

                    if (eenheid === 'weken') {
                        dropdownValue = 1;
                    } else if (eenheid === 'maanden') {
                        dropdownValue = 2;
                    } else if (eenheid === 'jaren') {
                        dropdownValue = 3;
                    }
                }

            herstelverwachtingperiodeEl.value = dropdownValue;
            }

            const patientverwachtingenEl = document.getElementById('T203_patientverwachtingen');
            if (patientverwachtingenEl && verwachtHerstelPatient) {
                patientverwachtingenEl.innerHTML = verwachtHerstelPatient;
            }


            const voorlopigeconcelusieEl = document.getElementById('t203_voorlopigeconclusie');
            if (voorlopigeconcelusieEl && voorlopigeConlusie) {
                voorlopigeconcelusieEl.innerHTML = voorlopigeConlusie;
            }
  
        }


        //Onderzoek

        const conclusieEl = document.getElementById('t204_conclusie');
        if (conclusieEl && conclusieEl.innerHTML == '') {

            if (conclusieEl && conclusieAnamnese) {
                conclusieEl.innerHTML = conclusieAnamnese;
            }
        

            const indicatieonderzoekaanmelding1El = document.getElementById('t202_indicatieonderzoekaanmelding1');
            if (indicatieonderzoekaanmelding1El && indicatieVoorVerderFysio && indicatieVoorVerderFysio.toLowerCase() === 'nee') {
                indicatieonderzoekaanmelding1El.checked = true;
            }

            const indicatieonderzoekaanmelding0El = document.getElementById('t202_indicatieonderzoekaanmelding0');
            if (indicatieonderzoekaanmelding0El && indicatieVoorVerderFysio && indicatieVoorVerderFysio.toLowerCase() === 'ja') {
                indicatieonderzoekaanmelding0El.checked = true;
            }

            const handelingtoestemmingjn1El = document.getElementById('t204_handelingtoestemmingjn1');
            if (handelingtoestemmingjn1El && toestemmingBijzondereBehandeling && toestemmingBijzondereBehandeling.toLowerCase() === 'nee') {
                handelingtoestemmingjn1El.checked = true;
            }

            const handelingtoestemmingjn0El = document.getElementById('t204_handelingtoestemmingjn0');
            if (handelingtoestemmingjn0El && toestemmingBijzondereBehandeling && toestemmingBijzondereBehandeling.toLowerCase() === 'ja') {
                handelingtoestemmingjn0El.checked = true;
            }


            const toelichtingBijzondereBehandelingEl = document.getElementById('t204_handelingtoestemming');
            if (toelichtingBijzondereBehandelingEl && toelichtingBijzondereBehandeling){
                toelichtingBijzondereBehandelingEl.innerHTML = toelichtingBijzondereBehandeling;
            }

            const inspectieEl = document.getElementById('t204_inspectie');
            if (inspectieEl && inspectie) {
                inspectieEl.innerHTML = inspectie;
            }

            const inspectiedynamischEl = document.getElementById('t204_inspectiedynamisch');
            if (inspectiedynamischEl && dynamisch) {
                inspectiedynamischEl.innerHTML = dynamisch;
            }

            const inspectiestatischEl = document.getElementById('t204_inspectiestatisch');
            if (inspectiestatischEl && statisch) {
                inspectiestatischEl.innerHTML = statisch;
            }

            const inspectieobservatieEl = document.getElementById('t204_inspectieobservatie');
            if (inspectieobservatieEl && overig) {
                inspectieobservatieEl.innerHTML = overig;
            }

            const inspectiepelpatieEl = document.getElementById('t204_inspectiepalpatie');
            if (inspectiepelpatieEl && palpatie) {
                inspectiepelpatieEl.innerHTML = palpatie;
            }


        }   


        //Analyse


        const werkdiagnoseEl = document.getElementById('t205_FysTherapeutDiag');

        if (werkdiagnoseEl && werkdiagnoseEl.innerHTML == ''){

            if (werkdiagnoseEl && werkdiagnose){
                werkdiagnoseEl.innerHTML = werkdiagnose;
            }

            //TODO: aanvulling

            // Wordt deze wel gebruikt?
            // const overigeEl = document.getElementById('t203_overige');
            // if (overigeEl) {
            //     overigeEl.innerHTML = overig;
            // }

            

            const janee0El = document.getElementById('t205_janee0');
            if (janee0El && indicatieFysio && indicatieFysio.toLowerCase() === 'ja') {
                janee0El.checked = true;
            }

            const janee1El = document.getElementById('t205_janee1');
            if (janee1El && indicatieFysio && indicatieFysio.toLowerCase() === 'nee') {
                janee1El.checked = true;
            }

        }


        //Behandelplan

        const consultatieConcelusieEl = document.getElementById('t206_ConsultatieConclusie');
        if (consultatieConcelusieEl && consultatieConcelusieEl.innerHTML == '') {

            if (consultatieConcelusieEl && hoofddoel) {
                consultatieConcelusieEl.innerHTML = hoofddoel;
            }

            const verwachtHerstelFysioEl = document.getElementById('t206_verwachthersteltherapeut');
            if (verwachtHerstelFysioEl) {

                let dropdownValue = 0; // default waarde


                if (verwachtHerstelFysioDD) {
                    
                    if (verwachtHerstelFysioDD.includes('progressie')) {
                        dropdownValue = 572;
                    } else if (verwachtHerstelFysioDD.includes('geringe')) {
                        dropdownValue = 569;
                    } else if (verwachtHerstelFysioDD.includes('matige')) {
                        dropdownValue = 567;
                    } else if (verwachtHerstelFysioDD.includes('bepalen')) {
                        dropdownValue = 800;
                    } else if (verwachtHerstelFysioDD.includes('Onderhoud')) {
                        dropdownValue = 565;
                    } else if (verwachtHerstelFysioDD.includes('klachten')) {
                        dropdownValue = 571;
                    } else if (verwachtHerstelFysioDD.includes('Stabilisatie')) {
                        dropdownValue = 573;
                    } else if (verwachtHerstelFysioDD.includes('herstel')) {
                        dropdownValue = 568;
                    }
                }

                verwachtHerstelFysioEl.value = dropdownValue;
            }


            const behandelepisodeverwachtingEl = document.getElementById('t206_behandelepisodeverwachting');
                if (behandelepisodeverwachtingEl && verwachteDuurFysioAantal) {
                        behandelepisodeverwachtingEl.value = verwachteDuurFysioAantal;
                }


            const herstelverwachtingperiodeEl = document.getElementById('t206_herstelverwachtingperiode');
            if (herstelverwachtingperiodeEl) {
                let dropdownValue = 1; // default waarde

                if (verwachteDuurFysioEenheid) {
                    const eenheid = verwachteDuurFysioEenheid.toLowerCase();

                    if (eenheid === 'weken') {
                        dropdownValue = 1;
                    } else if (eenheid === 'maanden') {
                        dropdownValue = 2;
                    } else if (eenheid === 'jaren') {
                        dropdownValue = 3;
                    }
                }

            herstelverwachtingperiodeEl.value = dropdownValue;
            }
            
        }
       
    });



}, false);
})();