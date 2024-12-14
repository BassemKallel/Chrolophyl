<template>
    <div class="bg-gray-50 min-h-screen flex flex-col items-center py-12">
        <div class="max-w-4xl text-center mb-8">
            <h1 class="green text-4xl font-bold text-green-600">Meet the Chlorophyl Team</h1>
            <br><br>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">

                <div class="flex flex-col items-center">
                    <img src="@/assets/images/bassem.jpg" alt="Friend's Photo"
                        class="rounded-full w-40 h-40 object-cover mb-4" />
                    <h3 class="text-xl font-semibold text-gray-800">Bassem Kallel</h3>
                    <p class="text-gray-600">Co-Founder & Lead Developer</p>
                </div>

                <div class="flex flex-col items-center">
                    <img src="@/assets/images/ghada.jpg" alt="Your Photo"
                        class="rounded-full w-40 h-40 object-cover mb-4" />
                    <h3 class="text-xl font-semibold text-gray-800">Ghada Fatnassi</h3>
                    <p class="text-gray-600">Co-Founder & Marketing Specialist</p>
                </div>
                <div class="flex flex-col items-center">
                    <img src="@/assets/images/youssef.jpg" alt="Friend's Photo"
                        class="rounded-full w-40 h-40 object-cover mb-4" />
                    <h3 class="text-xl font-semibold text-gray-800">Youssef Limem</h3>
                    <p class="text-gray-600">Co-Founder & Product Manager</p>
                </div>
            </div>
            <p class="mt-4 text-gray-700 text-lg">
                Discover the story of how three passionate engineers turned their dream into a blooming success.
            </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl">
            <h2 class="green text-2xl font-semibold  mb-4">Our Journey</h2>
            <p class="text-gray-600 leading-relaxed">
                Once upon a time, three engineers with a shared passion for nature decided to transform their love for
                plants
                into a thriving business. From humble beginnings, we cultivated a dream to reconnect people with the
                beauty
                of greenery and the joy of flowers.
            </p>
            <p class="mt-4 text-gray-600 leading-relaxed">
                Our journey started in a small garage, surrounded by seedlings and blooming dreams. Combining our
                expertise in
                engineering and an unyielding love for sustainability, we built GreenBloom—a platform dedicated to
                providing
                vibrant plants and flowers to homes and offices.
            </p>
            <p class="mt-4 text-gray-600 leading-relaxed">
                As engineers, we innovated in every aspect, from developing a seamless user experience to creating
                eco-friendly
                packaging that aligns with our values. Today, GreenBloom stands as a testament to the power of combining
                technology and nature for a brighter, greener tomorrow.
            </p>
            <div class="mt-8 flex justify-center">
                <img src="@/assets/images/team3.jpg" alt="Team Photo" class="image rounded-lg shadow-lg" />
            </div>
            <div class="mt-8 flex justify-center">
                <img src="@/assets/images/team2.jpg" alt="Team Photo" class="image rounded-lg shadow-lg" />
            </div>
            <div class="mt-8 flex justify-center">
                <img src="@/assets/images/team4.jpg" alt="Team Photo" class="image rounded-lg shadow-lg" />
            </div>

        </div>
    </div>
</template>
<style>
.image {
    width: 80%;
    height: 500px;

}
</style>
<script>
export default {
    name: "TeamView",
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>