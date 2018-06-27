const DOC = document

const $cdot = DOC.querySelector('.cdot')
const $a = DOC.querySelector('.a')
const $b = DOC.querySelector('.b')

const $circle = DOC.querySelector('#circle')

const anims = [() => {
	$cdot.classList.remove('hidden')
  $a.classList.remove('hidden')
	$circle.style.width = '300px'
}, () => {
  $b.classList.remove('hidden')
	$circle.style.height = '200px'
}]

const timer = i => setTimeout(() => {
	anims[i]()
  if (i < anims.length) timer(i + 1)
}, 3500)

timer(0)
