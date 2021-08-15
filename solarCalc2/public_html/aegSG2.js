
var aegSc = {};

// DEVICE INFORMATION
aegSc.updateInfo = function (subdev) {

    // GENERAL INFORMATION
    let param = subdev[subdev.paramName] || {};

    aegSc.manufacturer.value = subdev.manufacturer;
    aegSc.converterType.value = param.convDeviceType;
    aegSc.serialNumber.value = subdev.serialNumber;
    aegSc.installedDate.value = subdev.installedDate;
    aegSc.ratedChargePowerW.value = param.ratedChargePowerW;
    aegSc.ratedDischargePowerW.value = param.ratedDischargePowerW;
    aegSc.fwVersionConverterController.value = param.fwVersionConverterController;
    aegSc.fwVersionConverterFpga.value = param.fwVersionConverterFpga;
    aegSc.fwVersionConverterMcInterface.value = param.fwVersionConverterMcInterface;
    aegSc.deviceName.value = subdev.deviceName;
    aegSc.ipAddress.value = param.ipAddress;
};

// ACTUAL DATA
aegSc.updateData = function (data) {
    if (!data) {
        console.log('AEG. No valid data received');
        return;
    }

    // GRID CONNECTION INFO
    aegSc.gridFrequency.value = data.gridFrequency;
    aegSc.gridVoltL1L2.value = data.gridVoltL1L2;
    aegSc.gridVoltL2L3.value = data.gridVoltL2L3;
    aegSc.gridVoltL3L1.value = data.gridVoltL3L1;

    // GRID POWER
    aegSc.powerW.value = data.powerW;
    aegSc.conApparentPower.value = data.conApparentPower;
    aegSc.conReactivePower.value = data.conReactivePower;
    aegSc.conTruePower.value = data.conTruePower;
    aegSc.cosPhi.value = data.cosPhi;
    aegSc.conVoltL1L2.value = data.conVoltL1L2;
    aegSc.conVoltL2L3.value = data.conVoltL2L3;
    aegSc.conVoltL3L1.value = data.conVoltL3L1;
    aegSc.conCurrentL1.value = data.conCurrentL1;
    aegSc.conCurrentL2.value = data.conCurrentL2;
    aegSc.conCurrentL3.value = data.conCurrentL3;
    aegSc.gridFrequency.value = data.gridFrequency;
    aegSc.powerStackInputTemp.value = data.powerStackInputTemp;

    if (data.gridImport.powerW > 0) {
        //GRID IMPORT
        aegSc.powerW.value = -data.gridImport.powerW;
        aegSc.conVoltL1L2.value = data.gridImport.conVoltL1L2;
        aegSc.conVoltL2L3.value = data.gridImport.conVoltL2L3;
        aegSc.conVoltL3L1.value = data.gridImport.conVoltL3L1;
        aegSc.conCurrentL1.value = -data.gridImport.conCurrentL1;
        aegSc.conCurrentL2.value = -data.gridImport.conCurrentL2;
        aegSc.conCurrentL3.value = -data.gridImport.conCurrentL3;
        aegSc.conReactivePower.value = -data.gridImport.conReactivePower;
        aegSc.conTruePower.value = -data.gridImport.conTruePower;
        aegSc.conApparentPower.value = -data.gridImport.conApparentPower;
        aegSc.cosPhi.value = -data.gridImport.cosPhi;
        aegSc.gridFrequency.value = -data.gridImport.gridFrequency;
        aegSc.powerStackInputTemp.value = -data.gridImport.powerStackInputTemp;

    } else if (data.gridExport.powerW >= 0) {
        //GRID EXPORT
        aegSc.powerW.value = data.gridExport.powerW;
        aegSc.conVoltL1L2.value = data.gridExport.conVoltL1L2;
        aegSc.conVoltL2L3.value = data.gridExport.conVoltL2L3;
        aegSc.conVoltL3L1.value = data.gridExport.conVoltL3L1;
        aegSc.conCurrentL1.value = data.gridExport.conCurrentL1;
        aegSc.conCurrentL2.value = data.gridExport.conCurrentL2;
        aegSc.conCurrentL3.value = data.gridExport.conCurrentL3;
        aegSc.conReactivePower.value = data.gridExport.conReactivePower;
        aegSc.conTruePower.value = data.gridExport.conTruePower;
        aegSc.conApparentPower.value = data.gridExport.conApparentPower;
        aegSc.cosPhi.value = data.gridExport.cosPhi;
        aegSc.gridFrequency.value = data.gridExport.gridFrequency;
        aegSc.powerStackInputTemp.value = data.gridExport.powerStackInputTemp;

    }

    //ENERGY 
    aegSc.energyWh.value = data.energyWh;
    aegSc.dailyEnergyWh.value = data.dailyEnergyWh;
    aegSc.weeklyEnergyWh.value = data.weeklyEnergyWh;
    aegSc.monthlyEnergyWh.value = data.monthlyEnergyWh;
    aegSc.yearlyEnergyWh.value = data.yearlyEnergyWh;
    aegSc.totalEnergyProduced.value = data.totalEnergyProduced;
    aegSc.totalEnergyConsumed.value = data.totalEnergyConsumed;

    // GRID FREQUENCY PARAMS
    aegSc.gridFreq1MaxTimeDelay.value = data.gridFreq1MaxTimeDelay;
    aegSc.gridFreq1MinTimeDelay.value = data.gridFreq1MinTimeDelay;
    aegSc.gridFreqSetPoint1Max.value = data.gridFreqSetPoint1Max;
    aegSc.gridFreqSetPoint1Min.value = data.gridFreqSetPoint1Min;
    aegSc.gridFreq2MaxTimeDelay.value = data.gridFreqSetPoint1Min;
    aegSc.gridFreq2MinTimeDelay.value = data.gridFreq2MinTimeDelay;
    aegSc.gridFreqSetPoint2Max.value = data.gridFreqSetPoint2Max;
    aegSc.gridFreqSetPoint2Min.value = data.gridFreqSetPoint2Min;

    //GRID VOLTAGE PARAMS
    aegSc.gridVolt1MaxTimeDelay.value = data.gridVolt1MaxTimeDelay;
    aegSc.gridVolt1MinTimeDelay.value = data.gridVolt1MinTimeDelay;
    aegSc.gridVolt2MaxTimeDelay.value = data.gridVolt2MaxTimeDelay;
    aegSc.gridVolt2MinTimeDelay.value = data.gridVolt2MinTimeDelay;
    aegSc.gridVolt3MaxTimeDelay.value = data.gridVolt3MaxTimeDelay;
    aegSc.gridVolt3MinTimeDelay.value = data.gridVolt3MinTimeDelay;
    aegSc.gridVoltSetPoint1Max.value = data.gridVoltSetPoint1Max;
    aegSc.gridVoltSetPoint1Min.value = data.gridVoltSetPoint1Min;
    aegSc.gridVoltSetPoint2Max.value = data.gridVoltSetPoint2Max;
    aegSc.gridVoltSetPoint2Min.value = data.gridVoltSetPoint2Min;
    aegSc.gridVoltSetPoint3Max.value = data.gridVoltSetPoint3Max;
    aegSc.gridVoltSetPoint3Min.value = data.gridVoltSetPoint3Min;
}



    aegSc.updateInfo(dev);
    aegSc.updateData(dev, dev.data);
    


$(document).ready(function () {

    dm.onSelectedDataReceived(aegSc.updateData);
    dm.onSelectedChange(aegSc.onSelectedChanged);
    dm.onSelectedStatusChange(aegSc.onSelectedChanged);
    aegScGui.populateTempParam();
});






