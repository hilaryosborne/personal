export const addMessage = function (text, type) {
  return {'type': 'APPLICATION_MESSAGE_ADD', message:{'text':text, type:type}}
}
