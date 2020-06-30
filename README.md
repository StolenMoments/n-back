# 리액트 토이 프로젝트 [N-Back]


## :fire: Version 0.1 (2020-05-15)
- 2-back, 3-back 선택 가능
- 게임 횟수는 10회, 20회 선택 가능
- ~~디자인은 집어치우고~~ 게임 기능만 최소로 구현

## :hammer: TODO...
- 게임 결과를 alert 으로 띄우던걸 Modal로 바꾸기
- 게임 설명 추가하기
- 코드 리팩토링 :shit:
- 이쁘게 만들기 :cherry_blossom:
- S10 기준, 화면 잘 보이게 만들기. :no_mobile_phones:


---
### 시작...

'문제적 남자'에서 다뤘고, 요즘 핫한 AI 면접에도 등장하는 N-Back 게임을 구현해보려고 한다.

계기는 단순하다. 
- 오늘 AI 면접을 보면서 게임에 흥미가 생김.
- 구현이 쉬울 것 같은 설레발.
- Frontend, 특히 React 와 친해지고 싶어서.
- 뭐라도 해야할 것 같아서 :astonished:


### N-Back 게임?

<p><a href="https://commons.wikimedia.org/wiki/File:Single_n-back_task_animation.gif#/media/File:Single_n-back_task_animation.gif"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Single_n-back_task_animation.gif" alt="Single n-back task animation.gif"></a><br>By <a href="//commons.wikimedia.org/wiki/User:Pedros.lol" title="User:Pedros.lol">Pedros.lol</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=39241201">Link</a></p>

출처 : https://en.wikipedia.org/wiki/N-back

2-Back 이라면 2회차 전에 표시된 위치와 현재 표시된 위치가 동일한지 아닌지를 판단하면 된다. 3-Back 이면 3회차 전에, 4-Back 이면 4회차 전에...


### 블로그 

https://velog.io/@unknown9732
