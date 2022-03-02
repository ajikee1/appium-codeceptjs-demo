Feature('registeration');

Scenario('Create a new contact', async ({I}) => {

    await I.touchPerform([{action: 'press', options: {x: 1269, y: 2222}}, {action: 'release'}]);

    await I.fillField('First name', 'ajith');
    await I.fillField('Last name', 'keerikkattil');

    await I.hideDeviceKeyboard();

    await I.fillField('Phone', '4434434444');
    await I.fillField('Email', 'ajikee1@yopmail.com');

    await I.touchPerform([{action: 'press', options: {x: 1306, y: 191}}, {action: 'release'}]);

    pause();
});
