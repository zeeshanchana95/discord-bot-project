const { REST, Routes } =  require('discord.js');

const commands = [
    {
      name: 'create',
      description: 'Creates a new Short URL',
    },
  ];

const rest = new REST({ version: '10' }).setToken("MTE0OTUzMDgyMTg3OTkzNTAxNg.G3sFHR.gL4r8hPW3xw3b2Wd5CZy-dQGUr0HCJMReSEqOM");

(async () => {
    try {
      console.log('Started refreshing application (/) commands.');
      await rest.put(Routes.applicationCommands("1149530821879935016"), { body: commands });
      console.log('Successfully reloaded application (/) commands.');
      
    } catch (error) {
        console.error(error);
    }
})();