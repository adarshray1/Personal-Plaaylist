new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Khuda Bhi",
          artist: "Mohit Chauhan",
          cover: "https://iili.io/2evu86N.jpg",
          source: "mp3/1.mp3",
          favorited: false
        },
        {
          name: "Ek Mulaqat",
          artist: "Altamash Faridi",
          cover: "https://iili.io/2evlbyB.jpg",
          source: "mp3/2.m4a",
          favorited: true
        },

        {
          name: "Tujhe Sochta Hoon",
          artist: "KK",
          cover: "https://iili.io/2evUAKv.jpg",
          source: "mp3/3.mp3",
          favorited: false
        },

        {
          name: "Tu Hi Meri Shab Hai",
          artist: "KK",
          cover: "https://iili.io/2evi2iF.jpg",
          source: "mp3/4.mp3",
          favorited: false
        },
        {
          name: "Salamat ",
          artist: "Arijit Singh",
          cover: "https://iili.io/2evygZG.jpg",
          source: "mp3/5.mp3",
           favorited: true
        },
        {
          name: "Dillagi",
          artist: "Rahat Fateh Ali Khan",
          cover: "https://iili.io/2e82NkB.webp",
          source: "mp3/6.mp3",
          favorited: false
        },
        {
          name: "Dost Banke",
          artist: " Rahat Fateh Ali Khan,Gurnazar",
          cover: "https://iili.io/2e8BR1e.jpg",
          source: "mp3/7.mp3",
          favorited: true
        },
        {
          name: "Dil Ka Jo Haal Hai",
          artist: "Abhijeet,Shreya Ghosal",
          cover: "https://iili.io/2esR7yJ.jpg",
          source: "mp3/8.mp3",
          favorited: false
        },
        {
          name: "Haule Haule",
          artist: " Sukhwinder Singh",
          cover: "https://iili.io/2es5SxR.webp",
          source: "mp3/9.mp3",
          favorited: false
        },
        {
          name: "Mere Nam Tu",
          artist: "Abhay Jodhpurkar",
          cover: "https://iili.io/2esYnjf.jpg",
          source: "mp3/10.mp3",
          favorited: false
        },
        {
          name: "Aaj Se Teri",
          artist: "Amit Trivedi and Arijit Singh",
          cover: "https://iili.io/2esMqXe.jpg",
          source: "mp3/11.mp3",
          favorited: false
        },  
        {
          name: "Aashiqui Aa Gayi",
          artist: "Arijit Singh",
          cover: "https://iili.io/2esVnjt.jpg",
          source: "mp3/12.mp3",
          favorited: false
        },
        {
          name: "Bol Na Halke Halke",
          artist: "Mahalakshmi Iyer and Rahat Fateh Ali Khan",
          cover: "https://iili.io/2esWqKb.jpg",
          source: "mp3/13.mp3",
          favorited: false
        },

        {
          name: "Chal Tere Ishq Mein (Female)",
          artist: "Neeti Mohan,Vishal Mishra,Shehnaz Akhtar,Sahil Akhtar & Mithoon",
          cover: "https://iili.io/2eLdm1p.jpg",
          source: "mp3/14.mp3",
          favorited: false
        },
        {
          name: "Chand Sifarish",
          artist: "Kailash Kher and Shaan",
          cover: "https://iili.io/2eL2LaS.jpg",
          source: "mp3/15.mp3",
          favorited: false
        },
        {
          name: "Jugraafiya",
          artist: "Shreya Ghoshal and Udit Narayan",
          cover: "https://iili.io/2eL3DUN.jpg",
          source: "mp3/16.mp3",
          favorited: false
        },
        {
          name: "Main Agar Kahoon",
          artist: "Shreya Ghoshal and Sonu Nigam",
          cover: "https://iili.io/2eLKEy7.jpg",
          source: "mp3/17.mp3",
          favorited: false
        },
        {
          name: "Mareez-E-Ishq",
          artist: "Arijit Singh",
          cover: "https://iili.io/2eLC2cv.jpg",
          source: "mp3/18.mp3",
          favorited: false
        },
        {
          name: "Meherbaan",
          artist: "Ash King,Shekhar Ravjiani and Shilpa Rao",
          cover: "https://iili.io/2eLnkIS.jpg",
          source: "mp3/19.mp3",
          favorited: false
        },
        {
          name: "Baarish Ki Jaaye",
          artist: "B Praak",
          cover: "https://iili.io/2esy2ae.jpg",
          source: "mp3/20.mp3",
          favorited: false
        },
        {
          name: "Nazar Na Lag Jaaye",
          artist: "Ash King and Sachin–Jigar",
          cover: "https://iili.io/2eLza7j.jpg",
          source: "mp3/21.mp3",
          favorited: false
        },
        {
          name: "Pal Pal Dil Ke Paas",
          artist: " Arijit Singh and Parampara Thakur",
          cover: "https://iili.io/2eLTSgn.jpg",
          source: "mp3/22.mp3",
          favorited: false
        },
        {
          name: "Tujh Mein Rab Dikhta Hai",
          artist: "Roopkumar Rathod",
          cover: "https://iili.io/2eLRjbj.jpg",
          source: "mp3/23.mp3",
          favorited: false
        },
        {
          name: "Valam",
          artist: "Arijit Singh,Priya Saraiya and Sachin Jigar",
          cover: "https://iili.io/2eL7tHX.jpg",
          source: "mp3/24.mp3",
          favorited: false
        },
        {
          name: " Tere Mast Mast Do Nain",
          artist: "Rahat Fateh Ali Khan",
          cover: "https://iili.io/2eL0frQ.jpg",
          source: "mp3/25.mp3",
          favorited: false
        },
        {
          name: "Dagabaaz Re",
          artist: "Rahat Fateh Ali Khan, Shadab Faridi, and Shreya Ghoshal",
          cover: "https://iili.io/2eLGIj9.jpg",
          source: "mp3/26.mp3",
          favorited: false
        },
        {
          name: "Tu Jo Hain",
          artist: "Ankit Tiwari",
          cover: "https://iili.io/2eLH1vn.jpg",
          source: "mp3/27.mp3",
          favorited: false
        },

      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});