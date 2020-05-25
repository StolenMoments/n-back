# 리액트 토이 프로젝트 [N-Back]


## :fire: Version 0.1 (2020-05-15)
- -- [게임해보기](http://ec2-13-124-91-36.ap-northeast-2.compute.amazonaws.com) -- 서버 
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



### 대략적인 로직

0. N-Back의 N과 실행 횟수 결정.
1. grid 3x4 영역을 만든다.
2. 3x4 영역의 각 칸에  0,1,2,3 // 4,5,6,7 // 8,9,10,11 번호를 매긴다.
3. ~~숫자를 랜덤 생성하고 진행 상황을 보관하는 덱의 뒷 부분에 숫자를 삽입한다.~~<br>
(2020-05-14) 0~11 범위의 숫자들을 실행 횟수 만큼 랜덤하게 생성해두고 배열에 저장해둔다.
4. ~~랜덤 생성한 숫자와 매칭되는 영역을 색칠한다. 1초 동안 색을 유지하고 1.5초간 사라진다.~~<br>
(2020-05-14) 현재 회차를 의미하는 배열의 인덱스 변수를 하나 생성하고, 0 부터 시작한다. 이 인덱스가 가리키는 배열의 숫자와 매칭되는 영역을 색칠한다. 1초 동안 색 유지, 1.5초간 대기. 
5. 색이 유지되는 동안 O,X 입력은 최초 1회만 받는다.
6. ~~덱에 N+1개 만큼 저장이 되면 덱의 첫 원소와 마지막 원소의 동일 여부를 판단하고 입력받은 O,X를 비교해 정답 여부를 따로 저장해둔다.~~<br>
(2020-05-14) [인덱스]와 [인덱스 - N]번째 원소의 동일 여부를 판단하고 입력받은 O,X 를 비교해 정답 여부를 따로 저장해둔다.
7. ~~덱의 첫번째 원소를 제거 후 다시 3. 으로 이동. 0. 에서 설정한 실행 횟수를 채웠으면 종료.~~<br>
(2020-05-14) 인덱스 += 1, 다시 3. 으로 이동. 인덱스가 배열 범위를 벗어난 경우 종료.
8. 저장해둔 정답 여부를 결과로 출력하고 다시 0.으로 이동할 수 있도록 로직 및 UI 구현.


### 블로그 

https://velog.io/@unknown9732
