"use strict"

const fetch = require("node-fetch");
const REQUESTED_URL = "http://www.groupkt.com/country/get/all";


async function printIsoCodesOfCountry(url, givenCountry) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const loadedJson = await response.json();

            loadedJson.RestResponse.result.forEach(country => {
                if (country.name === givenCountry) {
                    console.log(`\nISO codes of ${givenCountry}: ${country.alpha2_code} and ${country.alpha3_code}.\n`);
                }
            });
        }
    } catch (error) {
        console.error(`\n(!) Network request for ${REQUESTED_URL} failed with error:\n ${error}.\n`);
    }
}

printIsoCodesOfCountry(REQUESTED_URL, "Norway");