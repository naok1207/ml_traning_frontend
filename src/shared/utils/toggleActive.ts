// active状態をtoggleする関数
// beforeElementId: active状態を取り除くelementのid
// afterElement: active状態を取り付けるelementのid
export const toggleActive = (beforeElementId: string, afterElementId: string) => {
  const beforeElement = document.getElementById(beforeElementId)
  const afterElement = document.getElementById(afterElementId)
  beforeElement?.removeAttribute('active')
  afterElement?.setAttribute('active', 'true')
}
