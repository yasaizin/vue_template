<template>
  <div id="home" class="template__viewer">
    <div class="spa__background__image">
      <img src="@/assets/img/blue-grotto.jpg" />
    </div>
    <div>
      <h1>Portfolio</h1>
    </div>
    <div id="ankerLinks">
      <ul>
        <li>
          <router-link to="profile"><span>Profile</span></router-link>
        </li>
        <li>
          <router-link to="skill"><span>Skill</span></router-link>
        </li>
        <li><router-link to="works"><span>Works</span></router-link></li>
        <li><router-link to="contact"><span>Contact</span></router-link></li>
      </ul>
    </div>
    <section id="profile">
      
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  description: 'プログラマーとして転職を成功させたい！そんなあなたに経験した職歴やスキルについて紹介するために作成しています。プログラミング(Java, Python, PHP)の経験から転職についての考えまでお話しします！YasaizinことYuのポートフォリオサイトの役目も持ちます。',
}
</script>

<style lang=scss>



.spa__background__image {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -100;
  -ms-filter: blur(3px);
  filter: blur(3px);
  img {
    min-width: 150%;
    min-height: 100%;
  }
}

#ankerLinks {
  ul {
    display: flex;
    li {
      position: relative;
      $height: 10vh;
      $width: 21%;
      margin: 0 2%;
      width: $width;
      a {
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: bold;
        color: white;
        mix-blend-mode: difference;
        display: block;
        height: 100%;
        width: 100%;
        line-height: $height;
      }
    }
  }
}

</style>
