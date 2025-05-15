/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EnergyEvse } from "#index.js";

EnergyEvse.patch({
    details: "Electric Vehicle Supply Equipment (EVSE) is equipment used to charge an Electric Vehicle (EV) or " +
        "Plug-In Hybrid Electric Vehicle. This cluster provides an interface to the functionality of Electric " +
        "Vehicle Supply Equipment (EVSE) management." +
        "\n" +
        "Devices targeted by this cluster include Electric Vehicle Supply Equipment (EVSE). The cluster " +
        "generically assumes a signaling protocol (J1772 in NA and IEC61851 in Europe and Asia) between the " +
        "EVSE and Electric Vehicle (EV) that utilizes a pilot signal to manage the states of the charging " +
        "process. [SAE J2847/3_202311] version and IEC61841 define Pilot signal as a modulated DC voltage on " +
        "a single wire." +
        "\n" +
        "Power Line Communication (PLC) is supported by some EVSEs (e.g. for support of ISO 15118 in Europe " +
        "and SAE J2931/4 in NA) and may enable features such as Vehicle to Grid (V2G) or Vehicle to" +
        "\n" +
        "Home (V2H) that allows for bi-directional charging/discharging of electric vehicles." +
        "\n" +
        "More modern EVSE devices may optionally support ISO 15118-20 in Europe and SAE J2836/3 for NA to " +
        "support bi-directional charging (Vehicle to Grid - V2G) and Plug and Charge capabilities." +
        "\n" +
        "This cluster definition assumes AC charging only. DC charging options may be added in future " +
        "revisions of this cluster." +
        "\n" +
        "This cluster supports a safety mechanism that may lockout remote operation until the initial " +
        "latching conditions have been met. Some of the fault conditions defined in SAE J1772, such as " +
        "Ground- Fault Circuit Interrupter (GFCI) or Charging Circuit Interrupting Device (CCID), may require " +
        "clearing by an operator by, for example, pressing a button on the equipment or breaker panel." +
        "\n" +
        "This EVSE cluster is written around support of a single EVSE. Having multiple EVSEs at home or a " +
        "business is managed by backend system and outside scope of this cluster." +
        "\n" +
        "Note that in many deployments the EVSE may be outside the home and may suffer from intermittent " +
        "network connections (e.g. a weak WiFi signal). It also allows for a charging profile to be pre- " +
        "configured, in case there is a temporary communications loss during a charging session.",

    xref: { document: "cluster", section: "9.3" },

    children: [
        undefined,

        {
            children: [
                { description: "ChargingPreferences" },
                { description: "SoCReporting" },
                { description: "PlugAndCharge" },
                { description: "Rfid" },
                { description: "V2X" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Sunday" },
                { description: "Monday" },
                { description: "Tuesday" },
                { description: "Wednesday" },
                { description: "Thursday" },
                { description: "Friday" },
                { description: "Saturday" }
            ]
        },

        {
            children: [
                { description: "The EV is not plugged in." },
                { description: "The EV is plugged in, but not demanding current." },
                { description: "The EV is plugged in and is demanding current, but EVSE is not allowing current to flow." },
                { description: "The EV is plugged in, charging is in progress, and current is flowing" },
                { description: "The EV is plugged in, discharging is in progress, and current is flowing" },
                { description: "The EVSE is transitioning from any plugged- in state to NotPluggedIn" },
                { description: "There is a fault (see FaultState attribute)" }
            ]
        },

        {
            children: [
                { description: "The EV is not currently allowed to charge or discharge" },
                { description: "The EV is currently allowed to charge" },
                { description: "The EV is currently allowed to discharge" },
                {
                    description: "The EV is not currently allowed to charge or discharge due to an error. The error must be cleared before operation can continue."
                },
                { description: "The EV is not currently allowed to charge or discharge due to self- diagnostics mode." },
                { description: "The EV is currently allowed to charge and discharge" }
            ]
        },

        {
            children: [
                { description: "The EVSE is not in an error state." },
                { description: "The EVSE is unable to obtain electrical measurements." },
                { description: "The EVSE input voltage level is too high." },
                { description: "The EVSE input voltage level is too low." },
                { description: "The EVSE detected charging current higher than allowed by charger." },
                { description: "The EVSE detected voltage on charging pins when the contactor is open." },
                { description: "The EVSE detected absence of voltage after enabling contactor." },
                { description: "The EVSE has an unbalanced current supply." },
                { description: "The EVSE has detected a loss in power." },
                { description: "The EVSE has detected another power quality issue (e.g. phase imbalance)." },
                { description: "The EVSE pilot signal amplitude short circuited to ground." },
                { description: "The emergency stop button was pressed." },
                { description: "The EVSE detected that the cable has been disconnected." },
                { description: "The EVSE could not determine proper power supply level." },
                { description: "The EVSE detected Live and Neutral are swapped." },
                { description: "The EVSE internal temperature is too high." },
                { description: "Any other reason." }
            ]
        },

        {
            children: [
                { description: "The EV decided to stop" },
                { description: "The EVSE decided to stop" },
                { description: "An other unknown reason" }
            ]
        }
    ]
});
