var aegScGui = {
    lastUnitLoaded: null
};
aegScGui.dataPanelMap = {};

// Device Information
aegScGui.createDeviceInformation = function (container) {

    // GENERAL INFORMATION
    let generalInformationPnl = hh.createActDataPanelCard('General Information');

    aegScGui.deviceName = hh.adf(generalInformationPnl, "Device Name: ", "", {});
    aegScGui.converterType = hh.adf(generalInformationPnl, "Converter Type: ", "", {});
    aegScGui.manufacturer = hh.adf(generalInformationPnl, "Manufacturer: ", "", {});
    aegScGui.ratedChargePowerW = hh.adf(generalInformationPnl, "Rated Charge Power: ", "kW", {});
    aegScGui.ratedDischargePowerW = hh.adf(generalInformationPnl, "Rated Discharge Power: ", "kW", {});
    aegScGui.serialNumber = hh.adf(generalInformationPnl, "Serial Number: ", "", {});
    aegScGui.ipAddress = hh.adf(generalInformationPnl, "IP Address: ", "", {});
    aegScGui.installedDate = hh.adf(generalInformationPnl, "Installation Date: ", "", {});
    aegScGui.fwVersionConverterController = hh.adf(generalInformationPnl, "Converter Controller Fw: ", "", {});
    aegScGui.fwVersionConverterFpga = hh.adf(generalInformationPnl, "Converter FPGA Fw: ", "", {});
    aegScGui.fwVersionConverterMcInterface = hh.adf(generalInformationPnl, "Converter MC Interface Fw: ", "", {});

    container.appendChild(generalInformationPnl);
}

//Actual Data
aegScGui.createActualData = function (container) {

    // GRID CONNECTION INFO
    let gridConnectionInfoPnl = hh.createActDataPanelCard('Grid Connection info');

    aegScGui.gridFrequency = hh.adf(gridConnectionInfoPnl, "Grid Frequency: ", "Hz", {});
    aegScGui.gridVoltL1L2 = hh.adf(gridConnectionInfoPnl, "Grid Voltage L1-L2: ", "V", {});
    aegScGui.gridVoltL2L3 = hh.adf(gridConnectionInfoPnl, "Grid Voltage L2-L3: ", "V", {});
    aegScGui.gridVoltL3L1 = hh.adf(gridConnectionInfoPnl, "Grid Voltage L3-L1: ", "V", {});

    // GRID POWER
    let gridPowerPnl = hh.createActDataPanelCard('Grid Connection info');

    aegScGui.powerW = hh.adf(gridPowerPnl, "Power: ", "kW", {});
    aegScGui.conApparentPower = hh.adf(gridPowerPnl, "Apparent Powerr: ", "kVA", {});
    aegScGui.conReactivePower = hh.adf(gridPowerPnl, "Reactive Power: ", "kVAR", {});
    aegScGui.conTruePower = hh.adf(gridPowerPnl, "True Power: ", "kW", {});
    aegScGui.cosPhi = hh.adf(gridPowerPnl, "Power Factorr: ", "cos(Ï•)", {});
    aegScGui.conVoltL1L2 = hh.adf(gridPowerPnl, "Con Voltage L1-L2: ", "V", {});
    aegScGui.conVoltL2L3 = hh.adf(gridPowerPnl, "Con Voltage L2-L3: ", "V", {});
    aegScGui.conVoltL3L1 = hh.adf(gridPowerPnl, "Con Voltage L3-L1: ", "V", {});
    aegScGui.conCurrentL1 = hh.adf(gridPowerPnl, "Con Current L1: ", "A", {});
    aegScGui.conCurrentL2 = hh.adf(gridPowerPnl, "Con Current L2: ", "A", {});
    aegScGui.conCurrentL3 = hh.adf(gridPowerPnl, "Con Current L3: ", "A", {});
    aegScGui.gridFrequency = hh.adf(gridPowerPnl, "Grid Frequency3: ", "Hz", {});
    aegScGui.powerStackInputTemp = hh.adf(gridPowerPnl, "Stack Input Temp: ", "C", {});

    //ENERGY
    let energyPnl = hh.createActDataPanelCard('Energy');

    aegScGui.energyWh = hh.adf(energyPnl, "Charge Energy: ", "Wh", {});
    aegScGui.energyWh = hh.adf(energyPnl, "Discharge Energy: ", "Wh", {});
    aegScGui.dailyEnergyWh = hh.adf(energyPnl, "Daily Charge Energy: ", "Wh", {});
    aegScGui.dailyEnergyWh = hh.adf(energyPnl, "Daily Discharge Energy: ", "Wh", {});
    aegScGui.weeklyEnergyWh = hh.adf(energyPnl, "Weekly Charge Energy: ", "Wh", {});
    aegScGui.weeklyEnergyWh = hh.adf(energyPnl, "Weekly Discharge Energy: ", "Wh", {});
    aegScGui.monthlyEnergyWh = hh.adf(energyPnl, "Monthly Charge Energy: ", "Wh", {});
    aegScGui.monthlyEnergyWh = hh.adf(energyPnl, "Monthly Discharge Energyy: ", "Wh", {});
    aegScGui.yearlyEnergyWh = hh.adf(energyPnl, "Yearly Charge Energy: ", "Wh", {});
    aegScGui.yearlyEnergyWh = hh.adf(energyPnl, "Yearly Discharge Energy: ", "Wh", {});
    aegScGui.totalEnergyProduced = hh.adf(energyPnl, "Total Charge Energy: ", "Wh", {});
    aegScGui.totalEnergyConsumed = hh.adf(energyPnl, "Total Discharge Energy: ", "Wh", {});

    // GRID FREQUENCY PARAMS
    let gridFreqParamsPnl = hh.createActDataPanelCard('Grid Frequency Params'); 

    aegScGui.gridFreq1MaxTimeDelay = hh.adf(gridFreqParamsPnl, "Grid Frequency 1 Max Time Delay: ", "sec", {});
    aegScGui.gridFreq1MinTimeDelay = hh.adf(gridFreqParamsPnl, "Grid Frequency 1 Min Time Delay: ", "sec", {});
    aegScGui.gridFreqSetPoint1Max = hh.adf(gridFreqParamsPnl, "Grid Frequency Set Point 1 Max: ", "Hz", {});
    aegScGui.gridFreqSetPoint1Min = hh.adf(gridFreqParamsPnl, "Grid Frequency Set Point 1 Min: ", "Hz", {});
    aegScGui.gridFreq2MaxTimeDelay = hh.adf(gridFreqParamsPnl, "Grid Frequency 2 Max Time Delay: ", "sec", {});
    aegScGui.gridFreq2MinTimeDelay = hh.adf(gridFreqParamsPnl, "Grid Frequency 2 Min Time Delay: ", "sec", {});
    aegScGui.gridFreqSetPoint2Max = hh.adf(gridFreqParamsPnl, "Grid Frequency Set Point 2 Max: ", "Hz", {});
    aegScGui.gridFreqSetPoint2Min = hh.adf(gridFreqParamsPnl, "Grid Frequency Set Point 2 Min: ", "Hz", {});

    // GRID VOLTAGE PARAMS
    let gridVoltageParamsPnl = hh.createActDataPanelCard('Grid Voltage Params');

    aegScGui.gridVolt1MaxTimeDelay = hh.adf(gridVoltageParamsPnl, "Grid Voltage 1 Max Time Delay: ", "sec", {});
    aegScGui.gridVolt1MinTimeDelay = hh.adf(gridVoltageParamsPnl, "Grid Voltage 1 Min Time Delay: ", "sec", {});
    aegScGui.gridVolt2MaxTimeDelay = hh.adf(gridVoltageParamsPnl, "Grid Voltage 2 Max Time Delay: ", "sec", {});
    aegScGui.gridVolt2MinTimeDelay = hh.adf(gridVoltageParamsPnl, "Grid Voltage 2 Min Time Delay: ", "sec", {});
    aegScGui.gridVolt3MaxTimeDelay = hh.adf(gridVoltageParamsPnl, "Grid Voltage 3 Max Time Delay: ", "sec", {});
    aegScGui.gridVolt3MinTimeDelay = hh.adf(gridVoltageParamsPnl, "Grid Voltage 3 Min Time Delay: ", "sec", {});
    aegScGui.gridVoltSetPoint1Max = hh.adf(gridVoltageParamsPnl, "Grid Voltage Set Point 1 Max: ", "V", {});
    aegScGui.gridVoltSetPoint1Min = hh.adf(gridVoltageParamsPnl, "Grid Voltage Set Point 1 Min: ", "V", {});
    aegScGui.gridVoltSetPoint2Max = hh.adf(gridVoltageParamsPnl, "Grid Voltage Set Point 2 Max: ", "V", {});
    aegScGui.gridVoltSetPoint2Min = hh.adf(gridVoltageParamsPnl, "Grid Voltage Set Point 2 Min: ", "V", {});
    aegScGui.gridVoltSetPoint3Max = hh.adf(gridVoltageParamsPnl, "Grid Voltage Set Point 3 Max: ", "V", {});
    aegScGui.gridVoltSetPoint3Min = hh.adf(gridVoltageParamsPnl, "Grid Voltage Set Point 3 Min: ", "V", {});


    container.appendChild(gridConnectionInfoPnl);
    container.appendChild(gridPowerPnl);
    container.appendChild(energyPnl);
    container.appendChild(gridFreqParamsPnl);
    container.appendChild(gridVoltageParamsPnl);
};

devManager.onSelectedDataReceived(aegScGui.updateData);
devManager.onSelectedParamInit(aegScGui.updateParam);

devManager.onSelectedChange(function (sDev) {
    aegScGui.lastUnitLoaded = null;
    if (sDev.connected) {
        aegScGui.updateData(sDev, sDev.getData());
    } else {
        mainUtils.setHtmlText('dataValues', 'N/A');
    }
});
devManager.onParamReceived(function (sDev, param) {

});

devManager.onSelectedStatusChange(function (sDev, status) {
    aegScGui.lastUnitLoaded = null;
    if (status) {
        aegScGui.updateData(sDev, sDev.getData());
    } else {
        mainUtils.setHtmlText('dataValues', 'N/A');
    }
});

aegScGui.init = function () {
    aegScGui.createActualData(document.getElementById("actDataContainer.actualData"));
    aegScGui.createDeviceInformation(document.getElementById("actDataContainer"));

};

$(document).ready(function () {
    aegScGui.init();
});
