<template>
    <div class="user-card" :class="{ 'bouncing': isBounce }">
        <div class="profile-card" :class="{ 'read-more': isReadMore }">
            <header>
                <!-- avatar -->
                <img :src="user.picture.large" />

                <!-- username -->
                <h2>{{ `${user.name.first} ${user.name.last}` }}/ Age: {{ `${user.dob.age}` }}</h2>

                <!--  location -->
                <h3>📍: {{ `${user.location.city}, ${user.location.country}` }}</h3>
            </header>

            <!-- contact -->
            <div class="profile-contact">
                <p>☎: {{ `${user.cell}` }}</p>
                <p>📬: {{ user.email }}</p>
            </div>

            <!--  social links -->
            <ul class="profile-social-links">
                <!-- email -->
                <li>
                    <a :href="`mailto:${user.email}`">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/512px-Circle-icons-mail.svg.png"
                        />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <button class="read-more-btn" @click="readMore">{{ isReadMore ? 'show less ▲' : 'read more ▼' }}</button>
</template>

<script>
export default {
    name: 'User',
    props: {
        user: Object
    },
    data: () => ({
        isReadMore: false,
        isBounce: true
    }),
    methods: {
        readMore() {
            this.isReadMore = !this.isReadMore
        }
    },
    mounted() {
        // triggers bouncing animation for new user
        setTimeout(() => {
            this.isBounce = false
        }, 1000);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-card {
    margin: 20px 0;
    /* ease bouncing up */
    transition: ease-in-out transform 300ms;
}

/* bouncing animation class */
.bouncing {
    transform: translateY(50px);
    animation: bouncing-effect 300ms;
}
/* bouncing animation keyframes */
@keyframes bouncing-effect {
    0% {
        transform: translateY(10px);
    }
    20% {
        transform: translateY(20px);
    }
    40% {
        transform: translateY(30px);
    }
    60% {
        transform: translateY(40px);
    }
    100% {
        transform: translateY(50px);
    }
}
header img {
    border-radius: 50%;
    margin: 20px auto;
    display: block;
    width: 200px;
    border: 5px solid #fff;
}

.profile-card {
    border-top: 0px solid #26a69a;
    border-bottom: 0px solid #00695c;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    height: 250px;
    width: 250px;
    background: url(https://s-media-cache-ak0.pinimg.com/736x/3a/1f/02/3a1f02c10700daa80655a302c5a27acf.jpg);
    background-size: cover;
    overflow: hidden;
    box-shadow: 0 0 100px 10px #fff;
    transition: all ease 0.3s;
}

.profile-card:hover,
.read-more {
    border-radius: 5px;
    height: 400px;
    width: 330px;
    max-width: 90vw;
    box-shadow: 0 0 70px 10px #fff;
    background: rgb(1, 0, 34);
}

.profile-card:hover header img,
.read-more header img {
    animation: profile_image 500ms linear both;
    animation-delay: 0.2s;
}

header {
    text-align: center;
}

header h2 {
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 25px;
    line-height: 25px;
    display: inline-block;
    padding: 10px;
    transition: all ease 0.25s;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
}

.profile-card:hover header h2,
.read-more header h2 {
    margin-top: 0px;
    outline: 0 solid #fff;
    border-top: 0px solid #fff;
    border-bottom: 1px solid #fff;
}

header h3 {
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
    font-size: 17px;
    font-weight: normal;
    line-height: 0px;
    margin: 0;
}

.profile-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    padding: 1px 20px 10px 20px !important;
    transition: all linear 1.5s;
    color: #fff;
    font-size: 14px;
    opacity: 0;
}

.profile-card:hover .profile-contact,
.read-more .profile-contact {
    opacity: 1;
}

.profile-contact p {
    margin: 2px 0;
    font-size: 12px;
}

.profile-social-links {
    position: relative;
    margin-top: -350px;
    margin-left: -100px;
    list-style-type: none;
    opacity: 0;
    transition: all ease 0.5s;
}

.profile-card:hover .profile-social-links,
.read-more .profile-social-links {
    margin-left: -290px;
    opacity: 1;
}

.profile-social-links li img {
    width: 30px;
    background: #fff;
    border-radius: 50%;
    padding: 5px;
}
.read-more-btn {
    padding: 5px 8px;
    font-size: 14px;
    margin: 5px;
}
/*PROFILE IMAGE ANIMATE */

@keyframes profile_image {
    0% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    3.4% {
        transform: matrix3d(
            1.032,
            0,
            0,
            0,
            0,
            1.041,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    4.7% {
        transform: matrix3d(
            1.045,
            0,
            0,
            0,
            0,
            1.06,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    6.81% {
        transform: matrix3d(
            1.066,
            0,
            0,
            0,
            0,
            1.089,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    9.41% {
        transform: matrix3d(
            1.088,
            0,
            0,
            0,
            0,
            1.117,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    10.21% {
        transform: matrix3d(
            1.094,
            0,
            0,
            0,
            0,
            1.123,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    13.61% {
        transform: matrix3d(
            1.112,
            0,
            0,
            0,
            0,
            1.133,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    14.11% {
        transform: matrix3d(
            1.114,
            0,
            0,
            0,
            0,
            1.133,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    17.52% {
        transform: matrix3d(
            1.121,
            0,
            0,
            0,
            0,
            1.124,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    18.72% {
        transform: matrix3d(
            1.121,
            0,
            0,
            0,
            0,
            1.119,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    21.32% {
        transform: matrix3d(
            1.12,
            0,
            0,
            0,
            0,
            1.107,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    24.32% {
        transform: matrix3d(
            1.115,
            0,
            0,
            0,
            0,
            1.096,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    25.23% {
        transform: matrix3d(
            1.113,
            0,
            0,
            0,
            0,
            1.094,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    29.03% {
        transform: matrix3d(
            1.106,
            0,
            0,
            0,
            0,
            1.09,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    29.93% {
        transform: matrix3d(
            1.105,
            0,
            0,
            0,
            0,
            1.09,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    35.54% {
        transform: matrix3d(
            1.098,
            0,
            0,
            0,
            0,
            1.096,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    36.74% {
        transform: matrix3d(
            1.097,
            0,
            0,
            0,
            0,
            1.098,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    41.04% {
        transform: matrix3d(
            1.096,
            0,
            0,
            0,
            0,
            1.102,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    44.44% {
        transform: matrix3d(
            1.097,
            0,
            0,
            0,
            0,
            1.103,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    52.15% {
        transform: matrix3d(
            1.099,
            0,
            0,
            0,
            0,
            1.101,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    59.86% {
        transform: matrix3d(
            1.101,
            0,
            0,
            0,
            0,
            1.099,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    63.26% {
        transform: matrix3d(
            1.101,
            0,
            0,
            0,
            0,
            1.099,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        );
    }
    75.28% {
        transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    85.49% {
        transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    90.69% {
        transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    100% {
        transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
}
/*NAME ANIMATE */

.profile-card:hover header h2,
.read-more header h2 {
    animation: name_and_job 1500ms linear both;
    animation-delay: 0.4s;
}

@keyframes name_and_job {
    0% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1);
    }
    1.3% {
        transform: matrix3d(
            3.905,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -237.02,
            0,
            0,
            1
        );
    }
    2.55% {
        transform: matrix3d(
            4.554,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -182.798,
            0,
            0,
            1
        );
    }
    4.1% {
        transform: matrix3d(
            4.025,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -125.912,
            0,
            0,
            1
        );
    }
    5.71% {
        transform: matrix3d(
            3.039,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -79.596,
            0,
            0,
            1
        );
    }
    8.11% {
        transform: matrix3d(
            1.82,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -31.647,
            0,
            0,
            1
        );
    }
    8.81% {
        transform: matrix3d(
            1.581,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -21.84,
            0,
            0,
            1
        );
    }
    11.96% {
        transform: matrix3d(
            1.034,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            4.825,
            0,
            0,
            1
        );
    }
    12.11% {
        transform: matrix3d(
            1.023,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            5.53,
            0,
            0,
            1
        );
    }
    15.07% {
        transform: matrix3d(
            0.947,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            12.662,
            0,
            0,
            1
        );
    }
    16.12% {
        transform: matrix3d(
            0.951,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            13.007,
            0,
            0,
            1
        );
    }
    27.23% {
        transform: matrix3d(
            1.001,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            2.352,
            0,
            0,
            1
        );
    }
    27.58% {
        transform: matrix3d(
            1.001,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            2.121,
            0,
            0,
            1
        );
    }
    38.34% {
        transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -0.311,
            0,
            0,
            1
        );
    }
    40.09% {
        transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -0.291,
            0,
            0,
            1
        );
    }
    50% {
        transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -0.048,
            0,
            0,
            1
        );
    }
    60.56% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.007, 0, 0, 1);
    }
    82.78% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    100% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
}

.profile-card:hover ul li:first-child,
.read-more ul li:first-child {
    animation: social_animation 2000ms ease-in-out both;
    animation-delay: 0.75s;
}

/* .profile-card:hover ul li:nth-child(2), .read-more ul li:nth-child(2){
  animation: social_animation 2000ms ease-in-out both;
  animation-delay: 1s;
} */

@keyframes social_animation {
    0% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1);
    }
    1.3% {
        transform: matrix3d(
            3.905,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -237.02,
            0,
            0,
            1
        );
    }
    2.55% {
        transform: matrix3d(
            4.554,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -182.798,
            0,
            0,
            1
        );
    }
    4.1% {
        transform: matrix3d(
            4.025,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -125.912,
            0,
            0,
            1
        );
    }
    5.71% {
        transform: matrix3d(
            3.039,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -79.596,
            0,
            0,
            1
        );
    }
    8.11% {
        transform: matrix3d(
            1.82,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -31.647,
            0,
            0,
            1
        );
    }
    8.81% {
        transform: matrix3d(
            1.581,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -21.84,
            0,
            0,
            1
        );
    }
    11.96% {
        transform: matrix3d(
            1.034,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            4.825,
            0,
            0,
            1
        );
    }
    12.11% {
        transform: matrix3d(
            1.023,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            5.53,
            0,
            0,
            1
        );
    }
    15.07% {
        transform: matrix3d(
            0.947,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            12.662,
            0,
            0,
            1
        );
    }
    16.12% {
        transform: matrix3d(
            0.951,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            13.007,
            0,
            0,
            1
        );
    }
    27.23% {
        transform: matrix3d(
            1.001,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            2.352,
            0,
            0,
            1
        );
    }
    27.58% {
        transform: matrix3d(
            1.001,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            2.121,
            0,
            0,
            1
        );
    }
    38.34% {
        transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -0.311,
            0,
            0,
            1
        );
    }
    40.09% {
        transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -0.291,
            0,
            0,
            1
        );
    }
    50% {
        transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            -0.048,
            0,
            0,
            1
        );
    }
    60.56% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.007, 0, 0, 1);
    }
    82.78% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    100% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
}
</style>
