<!-- =========================================================================================
  File Name: Profile.vue
  Description: Profile Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="profile-page">

        <!-- PROFILE HEADER -->
        <div class="profile-header">
            <div class="relative">
                <div class="cover-container rounded-t-lg">
                    <img :src="user_info.cover_img" alt="user-profile-cover" class="responsive block">
                </div>
                <div class="profile-img-container pointer-events-none">
                    <div>
                        <vs-avatar class="user-profile-img" :src="user_info.profile_img" size="200px" />
                        <h3 class="text-white text-center">Veer Singh</h3>
                        <br>
                        <br>
                        <br>
                        <br>
                    </div>
                </div>
            </div>
            <!-- <vx-navbar> -->
            <!-- </vx-navbar> -->
        </div>

        <!-- COL AREA -->
        <div class="vx-row">
            <!-- COL 1 -->

            <!-- COL 2 -->
            <div class="vx-col w-full lg:w-1/3">

                <vx-card title="Friends" class="mt-base">

                    <!-- FRIENDS LIST -->
                    <ul class="friend-suggesions-list">
                        <li class="friend-suggestion flex items-center mb-4" v-for="(friend, index) in suggestedFriends" :key="index">
                            <div class="mr-3"><vs-avatar class="m-0" :src="friend.avatar" size="35px" /></div>
                            <div class="leading-tight">
                                <p class="font-medium">{{ friend.name }}</p>
                            </div>
                            <div class="ml-auto cursor-pointer">
                                <vs-button radius type="border" @click="selectedUser=friend.name" icon-pack="feather" icon="icon-eye" />
                            </div>
                        </li>
                    </ul>
                    
                </vx-card>
            </div>
            <div class="vx-col w-full lg:w-2/3">
                <vx-card class="mt-base" v-for="(post, index) in userPosts.filter(p=>{return p.author == selectedUser})" :key="index">
                    <div>
                        <!-- POST HEADER -->
                        <div class="post-header flex justify-between mb-4">
                            <div class="flex items-center">
                                <div>
                                    <vs-avatar class="m-0" :src="userLatestPhotos[0]" size="45px"></vs-avatar>
                                </div>
                                <div class="ml-4">
                                    <h6>{{ post.author }}</h6>
                                    <small>{{ post.time | date(true) }} at {{ post.time | time }}</small>
                                </div>
                            </div>
                            <div class="flex">
                                <feather-icon class="ml-4" icon="HeartIcon" :svgClasses="{'text-danger fill-current stroke-current': post.isLiked}"></feather-icon>
                            </div>
                        </div>

                        <!-- POST CONTENT -->
                        <div class="post-content">
                            <p>{{ post.text }}</p>
                        </div>
                        <div class="post-media-container mb-6 mt-4">
                            <ul class="flex post-media-list">
                                <li class="post-media m-1 w-full" v-for="(media, mediaIdex) in post.media.slice(0, 2)" :key="mediaIdex">
                                    <img class="responsive rounded" :src="media.img" alt="user-upload" v-if="mediaType(media) == 'image'">
                                    <video-player ref="player" class="media-video-player" :options="playerOptions(media)" v-else-if="mediaType(media) == 'video'" v-once />
                                    <span class="text-lg text-primary" v-else>Unknown Media Type</span>
                                </li>
                            </ul>
                            <span class="flex justify-end" v-if="post.media.length > 2">
                                <a class="inline-flex items-center text-sm" href=""><span>View All</span> <feather-icon :icon="$vs.rtl ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'" svgClasses="h-4 w-4"></feather-icon></a>
                            </span>
                        </div>

                        <!-- POST ACTION DATA -->
                        <div>
                            <div class="flex justify-between">
                                <div class="flex items-center">
                                    <div class="flex items-center"><feather-icon class="mr-2" icon="HeartIcon" svgClasses="h-5 w-5"></feather-icon> <span>{{ post.likes }}</span></div>
                                    <ul class="users-liked user-list ml-3 sm:ml-6">
                                        <li v-for="(user, userIndex) in post.usersLiked" :key="userIndex">
                                            <vx-tooltip :text="user.name" position="bottom">
                                                <vs-avatar :src="user.img" size="30px" class="border-2 border-white border-solid -m-1"></vs-avatar>
                                            </vx-tooltip>
                                        </li>
                                    </ul>
                                    <small class="ml-2">+{{ post.likes - 5 }} more</small>
                                </div>
                                <div class="flex items-center"><feather-icon class="mr-2" icon="MessageSquareIcon" svgClasses="h-5 w-5"></feather-icon> <span>{{ post.comments }}</span></div>
                            </div>
                            <div class="comments-container mt-4">
                                <ul class="user-comments-list">
                                    <li v-for="(commentedUser, commentIndex) in post.usersCommented.slice(0, 2)" :key="commentIndex" class="commented-user flex items-center mb-4">
                                        <div class="mr-3"><vs-avatar class="m-0" :src="commentedUser.img" size="30px" /></div>
                                        <div class="leading-tight">
                                            <p class="font-medium">{{ commentedUser.author }}</p>
                                            <span class="text-xs">{{ commentedUser.comment }}</span>
                                        </div>
                                        <div class="ml-auto">
                                            <div class="flex">
                                                <feather-icon icon="HeartIcon" svgClasses="h-4 w-4" class="mr-2 cursor-pointer"></feather-icon>
                                                <feather-icon icon="MessageSquareIcon" svgClasses="h-4 w-4" class="cursor-pointer"></feather-icon>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <span class="flex justify-end" v-if="post.usersCommented.length > 2">
                                    <a class="inline-flex items-center text-sm" href=""><span>View All</span> <feather-icon :icon="$vs.rtl ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'" svgClasses="h-4 w-4"></feather-icon></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </vx-card>
            </div>

            <!-- COL 3 -->
            
        </div>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  data () {
    return {
      selectedUser:"Tejasvi Kashyap",
      isNavOpen: false,
      userPoll: '',
      user_info: {
        profile_img: require('@/assets/images/profile/user-uploads/user-13.jpg'),
        cover_img: require('@/assets/images/profile/user-uploads/cover.jpg')
      },
      mediaExtensions: { img: ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'exif', 'tiff'], video: ['avi', 'flv', 'wmv', 'mov', 'mp4', '3gp'] },
      suggestedFriends: [
        { name: 'Tejasvi Kashyap', avatar: require('@/assets/images/portrait/small/avatar-s-5.jpg')},
        { name: 'Ramprakash Chandrashekar', avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg')},
        { name: 'Muhammed Mustafa MC', avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg')},
        { name: 'Manu M B',  avatar: require('@/assets/images/portrait/small/avatar-s-8.jpg')},
        { name: 'Shujan Pannag J', avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg')},
        { name: 'Ayushi Mishra',     avatar: require('@/assets/images/portrait/small/avatar-s-10.jpg')},
        { name: 'Veer Singh',      avatar: require('@/assets/images/portrait/small/avatar-s-11.jpg')},
        { name: 'Skanda Prasad', avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg')},
        { name: 'Pranav Deshmukh', avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg')},
        { name: 'Abhishek Rao', avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg')},
        { name: 'Pranav B', avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg')},
        { name: 'Kshitij Jain M', avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg')},
        { name: 'Pratyusha R', avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg')},
        { name: 'Meghana M Shastry', avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg')},
      ],
      userLatestPhotos: [
        require('@/assets/images/profile/user-uploads/user-01.jpg'),
        require('@/assets/images/profile/user-uploads/user-02.jpg'),
        require('@/assets/images/profile/user-uploads/user-04.jpg'),
        require('@/assets/images/profile/user-uploads/user-03.jpg'),
        require('@/assets/images/profile/user-uploads/user-05.jpg'),
        require('@/assets/images/profile/user-uploads/user-06.jpg'),
        require('@/assets/images/profile/user-uploads/user-07.jpg'),
        require('@/assets/images/profile/user-uploads/user-08.jpg'),
        require('@/assets/images/profile/user-uploads/user-09.jpg')
      ],
      userPosts: [
        {
          author     : 'Tejasvi Kashyap',
          time       : 'Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)',
          isLiked    : true,
          text       : 'I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.',
          media      : [{ img: require('@/assets/images/profile/post-media/2.jpg') }],
          likes      : 145,
          comments   : 77,
          usersLiked : [
            { name: 'Trina Lynes',       img: require('@/assets/images/portrait/small/avatar-s-1.jpg') },
            { name: 'Lilian Nenez',      img: require('@/assets/images/portrait/small/avatar-s-2.jpg') },
            { name: 'Alberto Glotzbach', img: require('@/assets/images/portrait/small/avatar-s-3.jpg') },
            { name: 'George Nordick',    img: require('@/assets/images/portrait/small/avatar-s-4.jpg') },
            { name: 'Vennie Mostowy',    img: require('@/assets/images/portrait/small/avatar-s-5.jpg') }
          ],
          commentbox : '',
          usersCommented: [
            {
              comment : 'orthoplumbate morningtide naphthaline exarteritis',
              author  : 'Kitty Allanson',
              img     : require('@/assets/images/portrait/small/avatar-s-6.jpg'),
              time    : 'Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)'
            },
            {
              comment : 'blockiness pandemy metaxylene speckle coppy',
              author  : 'Jeanie Bulgrin',
              img     : require('@/assets/images/portrait/small/avatar-s-8.jpg'),
              time    : 'Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)'
            }
          ]
        },
        {
          author     : 'Ramprakash Chandrashekar',
          time       : 'Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)',
          isLiked    : true,
          text       : 'I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.',
          media      : [{ img: require('@/assets/images/profile/post-media/2.jpg') }],
          likes      : 145,
          comments   : 77,
          usersLiked : [
            { name: 'Trina Lynes',       img: require('@/assets/images/portrait/small/avatar-s-1.jpg') },
            { name: 'Lilian Nenez',      img: require('@/assets/images/portrait/small/avatar-s-2.jpg') },
            { name: 'Alberto Glotzbach', img: require('@/assets/images/portrait/small/avatar-s-3.jpg') },
            { name: 'George Nordick',    img: require('@/assets/images/portrait/small/avatar-s-4.jpg') },
            { name: 'Vennie Mostowy',    img: require('@/assets/images/portrait/small/avatar-s-5.jpg') }
          ],
          commentbox : '',
          usersCommented: [
            {
              comment : 'orthoplumbate morningtide naphthaline exarteritis',
              author  : 'Kitty Allanson',
              img     : require('@/assets/images/portrait/small/avatar-s-6.jpg'),
              time    : 'Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)'
            },
            {
              comment : 'blockiness pandemy metaxylene speckle coppy',
              author  : 'Jeanie Bulgrin',
              img     : require('@/assets/images/portrait/small/avatar-s-8.jpg'),
              time    : 'Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)'
            }
          ]
        }
      ],
      wasSidebarOpen: null
    }
  },
  computed: {
    mediaType () {
      return (media) => {
        if (media.img) {
          const ext = media.img.split('.').pop()
          if (this.mediaExtensions.img.includes(ext)) return 'image'
        } else if (media.sources && media.poster) {
          // other validations
          return 'video'
        }
      }
    },
    playerOptions () {
      return (media) => {
        return {
          height: '360',
          fluid: true,
          autoplay: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: media.sources,
          poster: media.poster
        }
      }
    }
  },
  methods: {
    loadContent () {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-load-more-posts',
        scale: 0.45
      })
      setTimeout(() => {
        this.$vs.loading.close('#button-load-more-posts > .con-vs-loading')
      }, 3000)
    }
  },
  components: {
    videoPlayer
  },
  mounted () {
    this.wasSidebarOpen = this.$store.state.reduceButton
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
  },
  beforeDestroy () {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  }
}

</script>


<style lang="scss">
@import "@/assets/scss/vuexy/pages/profile.scss";
</style>
