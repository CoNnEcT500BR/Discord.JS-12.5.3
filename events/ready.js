module.exports = async (client) => {

    /** Então exibe uma mensagem avisando que o bot foi inizializado com sucesso. */
    console.log('[LOG]', `VIVO`)
    /** Configuramos para que apareça "Jogando ..." ou "Playing ..." */
    client.user.setStatus('online');
  
    let activNum = 0
  
    setInterval(function() {
        if (activNum === 0) {
          client.user.setActivity(`🔑 Meu prefixo é ${process.env.prefix}`, { type: 'LISTENING' });
          activNum = 1;
      } else if (activNum === 1) {
          client.user.setActivity(`🔱 Digite ${process.env.prefix}ajuda`, { type: 'WATCHING' });
          activNum = 2;
      } else if (activNum === 2) {
          client.user.setActivity(`🌠 Discord Bot Template 🌠`, { type: 'PLAYING' });
          activNum = 0;
      }
      
    }, 3 * 1000);
  };
  
