/**
 * O Evento message é emitido toda vez que o bot recebe uma mensagem.
 * Podemos usar este evento como uma espécie de middleware para impedir vulnarabilidades ou outras coisas.
 */
module.exports = async (client, message) => {

  /** É uma boa pratica ignorar outros bots. isso faz o bot se auto-ignorar também.
   * E Também não entrara em um loop de spam...
   */
  if (message.author.bot) return

  if (message.content.indexOf(process.env.prefix) !== 0) return

  /** Então nós separamos o nome do comando de seus argumentos que são passados ao comando em si. */
  const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  /** Então se o comando existir ele irá ser executado.
   * Além disso o console também exibira o comando executado e quem o executou.
   */
  const cmd = client.commands.get(command)
  if (!cmd) return

  console.log('[LOG]', `${message.author.username} (${message.author.id}) executou o comando: ${cmd.help.name}`)
  if (cmd.conf.onlyguilds && !message.guild) return
  cmd.run(client, message, args)
}
