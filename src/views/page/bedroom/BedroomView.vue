<template class="bg-primary-50">
    <v-container>
        <div data-aos="fade-up">
            <v-container>
                <v-row class="mb-16" data-aos="fade-up">
                    <v-col cols="12">
                        <v-carousel :min-height="100" :max-height="100" hide-delimiters class="rounded-lg">
                            <v-carousel-item ass="item" v-for="(item, i) in carouselItems" :key="`carousel-item-${i}`"
                                :src="item.src" cover>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" lg="3" data-aos="fade-right">
                        <v-list lines="one" select-strategy="leaf" class="overflow-hidden">
                            <v-list-subheader class="mb-4 !text-[20px] !font-semibold">ប្រភេទសម្ភារៈ</v-list-subheader>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isAll" label="ទាំងអស់"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isBed" label="គ្រែគេង"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isCloset" label="ទូ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isDesk" label="តុ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isMirror" label="កញ្ចក់"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                        <v-container>
                            <p class="mb-5">Filter By Price</p>
                            <v-range-slider thumb-label="always" :min="0" :max="1000" v-model="price"
                                class="w-full"></v-range-slider>
                        </v-container>
                    </v-col>
                    <v-col cols="12" md="8" lg="9">
                        <v-row>
                            <v-col cols="12" sm="6" lg="4" v-for="(card, index) in paginatedProductCards"
                                :key="`product-card-${index}`" data-aos="fade-up" :data-aos-delay="index * 100">
                                <the-category-card :card="card"></the-category-card>
                            </v-col>
                        </v-row>
                        <v-row class="justify-content-center">
                            <!-- Pagination Controls -->
                            <v-pagination v-model="currentPage" :length="totalPages" total-visible="5"
                                color="primary-800" class="mt-4" />
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-sheet class="mx-auto !py-10" elevation="0" data-aos="fade-in">
            <h2 class="text-lg font-bold min-[500px]:text-[1.5rem] min-[600px]:text-[2rem]">
                អ្នកប្រហែលជាចូលចិត្ត
            </h2>
            <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="(cartrecom, n) in cartRecom" :key="`cart-recom-${n}`">
                    <the-recommendation-card data-aos="zoom-in" :src="cartrecom.href"
                        :title="cartrecom.title" :cartrecom="cartrecom"></the-recommendation-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </v-container>
</template>

<script setup>
    import TheCategoryCard from "@/components/cards/TheCategoryCard.vue";
    import TheRecommendationCard from "@/components/cards/TheRecommendationCard.vue";

    import { computed, ref, watch } from "vue";

    const isAll = ref(true);
    const isBed = ref(false);
    const isCloset = ref(false);
    const isDesk = ref(false);
    const isMirror = ref(false);
    const price = ref([0, 1000]);

    // Data for carousel
    const carouselItems = ref([
        {
            src: "/slide-groups/bedrooms/bedroom-slide-1.jpg",
        },

        {
            src: "/slide-groups/bedrooms/bedroom-slide-2.jpg",
        },

        {
            src: "/slide-groups/bedrooms/bedroom-slide-3.png",
        },
    ]);

    // Product cards
    const productCards = ref([
        {
            id: 1,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-1.jpg",
            title: "តុ",
            price: 199.99,
            category: "desk",
            slug: "sed-ut-perspiciatis-unde-omnis-iste",
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
        },
        {
            id: 2,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-1.jpg",
            title: "ទូ",
            price: 100.99,
            category: "closet",
            slug: "atque-corrupti-quos-dolores-et-quas-molestias",
            description: 'Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
        },
        {
            id: 3,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-2.jpg",
            title: "កញ្ចក់",
            price: 99.99,
            category: "mirror",
            slug: "beatae-vitae-dicta-sunt-explicabo",
            description: 'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
        },
        {
            id: 4,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-2.jpg",
            title: "តុ",
            price: 299.99,
            category: "desk",
            slug: "deserunt-mollitia-animi-id-est-laborum",
            description: 'Deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio',
        },
        {
            id: 5,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-2.jpg",
            title: "គ្រែគេង",
            price: 219.99,
            category: "bed",
            slug: "rerum-necessitatibus-saepe-eveniet-ut-et-voluptates",
            description: 'Rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 6,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-2.jpg",
            title: "ទូ",
            price: 99.99,
            category: "closet",
            slug: "rerum-necessitatibus-saepe-eveniet-ut-et-voluptates",
            description: 'Rerum necessitatibus eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 7,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-3.jpg",
            title: "គ្រែគេង",
            price: 219.99,
            category: "bed",
            slug: "harm-quidem-rerum-facilis-est-et-expedita",
            description: 'Harum quidem rerum ha facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus',
        },
        {
            id: 8,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-3.jpg",
            title: "តុ",
            price: 88.99,
            category: "desk",
            slug: "tempore-cum-soluta-nobis-est-eligendi-optio",
            description: 'Tempore cum te soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus',
        },
        {
            id: 9,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-3.jpg",
            title: "ទូ",
            price: 199.99,
            category: "closet",
            slug: "minus-id-quod-maxime-placeat-facere-possimus",
            description: 'Minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet yu',
        },
        {
            id: 10,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-2.jpg",
            title: "កញ្ចក់",
            price: 199.99,
            category: "mirror",
            slug: "omnis-voluptas-assumenda-est-omnis-dolor",
            description: 'Omnis voluptas assumenda est, bl omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
        },
        {
            id: 11,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-4.jpg",
            title: "គ្រែគេង",
            price: 209.99,
            category: "bed",
            slug: "quibusdam-et-aut-officiis-debitis-aut-rerum",
            description: 'Quibusdam et aut yt officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 12,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-4.jpg",
            title: "តុ",
            price: 25.99,
            category: "desk",
            slug: "rerum-necessitatibus-saepe-eveniet-ut-et-voluptates",
            description: 'Rerum necessitatibus nb saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 13,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-4.jpg",
            title: "ទូ",
            price: 99.99,
            category: "closet",
            slug: "zrerum-necessitatibus-saepe-eveniet-ut-et-voluptates",
            description: 'Rerum necessitatibus tt saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 14,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-3.jpg",
            title: "កញ្ចក់",
            price: 23.99,
            category: "mirror",
            slug: "omnis-voluptas-assumenda-est-omnis-dolor",
            description: 'Omnis voluptas cc assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
        },
        {
            id: 15,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-5.jpg",
            title: "គ្រែគេង",
            price: 1000.99,
            category: "bed",
            slug: "pomnis-voluptas-assumenda-est-omnis-dolor",
            description: 'Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
        },
        {
            id: 16,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-5.jpg",
            title: "តុ",
            price: 233.99,
            category: "desk",
            slug: "erum-necessitatibus-saepe-eveniet-ut-et-voluptates",
            description: 'Rerum necessitatibus saepe eveniet ee ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 17,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-5.jpg",
            title: "ទូ",
            price: 100.99,
            category: "closet",
            slug: "womnis-delectus-omnis-voluptas-assumenda-est",
            description: 'Omnis delectus omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
        },
        {
            id: 18,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-4.jpg",
            title: "កញ្ចក់",
            price: 45.99,
            category: "mirror",
            slug: "sdelectus-omnis-orum-necessitatibus-saepe",
            description: 'Delectus omnis orum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 19,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-6.jpg",
            title: "គ្រែគេង",
            price: 555.99,
            category: "bed",
            slug: "porum-necessitatibus-saepe-eveniet-ut-et-voluptates",
            description: 'Rerum necessitatibus ee saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 20,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-6.jpg",
            title: "តុ",
            price: 64.99,
            category: "desk",
            slug: "ud-ut-perspiciatis-unde-omnis-iste",
            description: 'Sed ut perspiciatis mi unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
        },
        {
            id: 21,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-6.jpg",
            title: "ទូ",
            price: 78.99,
            category: "closet",
            slug: "tiat-ut-perspiciatis-unde-omnis-iste",
            description: 'Tiat ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
        },
        {
            id: 22,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-5.jpg",
            title: "កញ្ចក់",
            price: 87.99,
            category: "mirror",
            slug: "lorum-necessitatibus-saepe-eveniet-ut-et-voluptates",
            description: 'Lorum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 23,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-7.jpg",
            title: "គ្រែគេង",
            price: 535.99,
            category: "bed",
            slug: "samd-tiut-perspiciatis-unde-omnis-iste",
            description: 'Samd tiut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
        },
        {
            id: 24,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-7.jpg",
            title: "តុ",
            price: 342.99,
            category: "desk",
            slug: "odio-dignissimos-ducimus-qui-blanditiis",
            description: 'Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        },
        {
            id: 25,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-7.jpg",
            title: "ទូ",
            price: 333.99,
            category: "closet",
            slug: "tyet-ut-perspiciatis-unde-rum-natus-error",
            description: 'Tyet ut perspiciatis unde rum natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
        },
        {
            id: 26,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-6.jpg",
            title: "កញ្ចក់",
            price: 222.99,
            category: "mirror",
            slug: "ut-aut-reiciendis-voluptatibus-maiores-alias",
            description: 'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        },
        {
            id: 27,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-8.jpg",
            title: "គ្រែគេង",
            price: 888.99,
            category: "bed",
            slug: "vero-eos-et-accusamus-et-iusto",
            description: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        },
        {
            id: 28,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-8.jpg",
            title: "តុ",
            price: 66.99,
            category: "desk",
            slug: "borum-necessitatibus-saepe-eveniet-ut-et-voluptates",
            description: 'Rorum et necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 29,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-8.jpg",
            title: "ទូ",
            price: 333.99,
            category: "closet",
            slug: "closet-dolor-sit-amet-adipisicing-elit",
            description: 'Closet dolor sit amet adipisicing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
        },
        {
            id: 30,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-7.jpg",
            title: "កញ្ចក់",
            price: 111.99,
            category: "mirror",
            slug: "mirror-dolor-sit-amet-adipisicing-elit-ui-ratione-voluptatem",
            description: 'Mirror dolor sit amet adipisicing elit ui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        },
        {
            id: 31,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-9.jpg",
            title: "គ្រែគេង",
            price: 124.99,
            category: "bed",
            slug: "bed-lopsam-ratione-voluptatem-sequi-nesciunt",
            description: 'Bed lopsam ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        },
        {
            id: 32,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-9.jpg",
            title: "តុ",
            price: 77.99,
            category: "desk",
            slug: "desk-repudiandae-sint-et-molestiae-non-recusandae",
            description: 'Desk repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        },
        {
            id: 33,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-9.jpg",
            title: "ទូ",
            price: 111.99,
            category: "closet",
            slug: "closet-vitae-dicta-sunt-explicabo-nemo-enim",
            description: 'Closet vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
        },
        {
            id: 34,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-8.jpg",
            title: "កញ្ចក់",
            price: 333.99,
            category: "mirror",
            slug: "mirror-earum-rerum-hic-ti-tenetur-a-sapiente",
            description: 'Mirror earum rerum hic ti tenetur a sapiente delectus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        },
        {
            id: 35,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-10.jpg",
            title: "គ្រែគេង",
            price: 352.99,
            category: "bed",
            slug: "bed-qui-officia-deserunt-mollitia-animi-id-est-laborum",
            description: 'Bed qui officia deserunt mollitia animi id est laborum. Et harum quidem rerum facilis est et expedita distinctio',
        },
        {
            id: 36,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-10.jpg",
            title: "តុ",
            price: 62.99,
            category: "desk",
            slug: "desk-kim-veniam-quis-nostrum-exercitationem-ullam",
            description: 'Desk kim veniam quis nostrum exercitationem ullam. Corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
        },
        {
            id: 37,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-10.jpg",
            title: "ទូ",
            price: 145.99,
            category: "closet",
            slug: "closet-zilla-quam-nihil-impedit-quominus-id-quod-maxime",
            description: 'Closet zilla quam nihil impedit quominus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
        },
        {
            id: 38,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-9.jpg",
            title: "កញ្ចក់",
            price: 123.99,
            category: "mirror",
            slug: "mirror-willa-quam-nihil-impedit-quominus-id-quod-maxime",
            description: 'Mirror willa quam nihil impedit quominus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
        },
        {
            id: 39,
            href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-11.jpg",
            title: "គ្រែគេង",
            price: 345.99,
            category: "bed",
            slug: "bed-pio-et-corrupti-quos-dolores-et-quas-molestias",
            description: 'Bed pio et corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
        },
        {
            id: 40,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-11.jpg",
            title: "តុ",
            price: 111.99,
            category: "desk",
            slug: "desk-sancte-earum-rerum-hic-tenetur-a-sapiente",
            description: 'Desk sancte earum rerum hic tenetur a sapiente delectus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        },
        {
            id: 41,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-11.jpg",
            title: "ទូ",
            price: 533.99,
            category: "closet",
            slug: "closet-ryearum-rerum-hic-tenetur-a-sapiente-delectus",
            description: 'Closet ryearum rerum hic tenetur a sapiente delectus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        },
        {
            id: 42,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-10.jpg",
            title: "កញ្ចក់",
            price: 233.99,
            category: "mirror",
            slug: "mirror-qwquam-nihil-impedit-quominus-id-quod-maxime",
            description: 'Mirror qwquam nihil impedit quominus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
        },
    ]);

    watch([isBed, isCloset, isDesk, isMirror], () => {
        isAll.value =
            !isBed.value && !isCloset.value && !isDesk.value && !isMirror.value;
        currentPage.value = 1;
    });
    const computedProductCards = computed(() => {
        return productCards.value.filter((product) => {
            const matchesCategory =
                isAll.value ||
                (isBed.value && product.category === "bed") ||
                (isCloset.value && product.category === "closet") ||
                (isDesk.value && product.category === "desk") ||
                (isMirror.value && product.category === "mirror");
            const matchesPrice =
                product.price >= price.value[0] && product.price <= price.value[1];
            return matchesCategory && matchesPrice;
        });
    });      
    // Recommendations
    const cartRecom = [
    {
        id: 1,
        href: "/slide-groups/bedrooms/bedroom-1.jpg",
        title: "គ្រែគេង",
        price: 109.99,
        category: 'bed',
        slug: 'modern-one',
        description: 'Modern one m dolore eu feugiat nulla facilisis',
    },
    {
        id: 2,
        href: "/slide-groups/bedrooms/bedroom-2.jpg",
        title: "គ្រែគេង",
        price: 129.99,
        category: 'bed',
        slug: 'modern-two',
        description: 'Modern two m dolore eu feugiat nulla facilisis',
    },
    {
        id: 3,
        href: "/slide-groups/bedrooms/bedroom-3.jpg",
        title: "គ្រែគេង",
        price: 139.99,
        category: 'bed',
        slug: 'modern-three',
        description: 'Modern three m dolore eu feugiat nulla facilisis',
    },
    {
        id: 4,
        href: "/slide-groups/bedrooms/bedroom-4.jpg",
        title: "គ្រែគេង",
        price: 149.99,
        category: 'bed',
        slug: 'modern-four',
        description: 'Modern four m dolore eu feugiat nulla facilisis',
    },
    {
        id: 5,
        href: "/slide-groups/bedrooms/bedroom-5.jpg",
        title: "គ្រែគេង",
        price: 159.99,
        category: 'bed',
        slug: 'modern-five',
        description: 'Modern five m dolore eu feugiat nulla facilisis',
    },
    {
        id: 6,
        href: "/slide-groups/bedrooms/bedroom-6.jpg",
        title: "គ្រែគេង",
        price: 169.99,
        category: 'bed',
        slug: 'modern-six',
        description: 'Modern six m dolore eu feugiat nulla facilisis',
    },
];


    // Pagination state
    const currentPage = ref(1);
    const itemsPerPage = 6; // Number of items to display per page
    // Calculating paginated items
    const paginatedProductCards = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return computedProductCards.value.slice(start, end);
    });
    const totalPages = computed(() =>
        Math.ceil(computedProductCards.value.length / itemsPerPage),
    );
</script>

<style scoped>
    .bg-white {
        background-color: white;
    }

    .rounded-lg {
        border-radius: 1.2rem;
    }
</style>
