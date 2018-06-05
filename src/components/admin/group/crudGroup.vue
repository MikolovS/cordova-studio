<template>

    <v-container style="padding: 0 !important;">
        <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 md4 lg5 v-if="userGroups">
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="(item, index) in userGroups" :key="index">
                        <div slot="header"><h2>{{item.full_name}}</h2></div>
                        <v-card class="my-2" >
                            <v-container fluid grid-list-lg>
                                <v-flex xs12 lg6>
                                    <v-layout row wrap>
                                        <v-flex xs12 sm4 md4 v-for="(groupType, i) in item.group_types" :key="i">
                                            <v-checkbox
                                                    v-model="groupType.has_group_type"
                                                    :label="groupType.display_name"
                                                    hide-details
                                            ></v-checkbox>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-container>
                        </v-card>
                        <v-btn left @click="saveUserGroup(item)">Сохранить</v-btn>
                    </v-expansion-panel-content>
                </v-expansion-panel>
        </v-flex>

            <!--<v-dialog v-model="dialog" max-width="290">-->
                <!--<v-card>-->
                    <!--<v-card-title class="headline">Удалить елемент?</v-card-title>-->
                    <!--<v-card-text>Можно просто отключить его отображение</v-card-text>-->
                    <!--<v-card-actions>-->
                        <!--<v-spacer></v-spacer>-->
                        <!--<v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Нет</v-btn>-->
                        <!--<v-btn color="green darken-1" flat="flat" @click.native="deleteTrainer()">Да</v-btn>-->
                    <!--</v-card-actions>-->
                <!--</v-card>-->
            <!--</v-dialog>-->

        </v-layout>
    </v-container>

</template>

<script>

    import notifyTemplate from '@/helpers/notifyTemplate'

    import {userGroupTypeConstants} from '@/core/constants'

    export default {
        components: {},
        computed: {},
        name: 'crudGroup',
        data() {
            return {
                userGroups: null
            }
        },
        created() {
            this.getUserGroupType()
        },
        methods: {
            async getUserGroupType() {
                let res = await this.$axios.get(userGroupTypeConstants.getUsers);
                this.userGroups = res.data.data
            },
            async saveUserGroup(user) {
                let params = user.group_types.filter(function (currentValue) {
                    return currentValue.has_group_type === true
                }).map(function callback(currentValue) {
                        return currentValue.slug;
                });
                console.log(params);

                let res = await this.$axios.post(userGroupTypeConstants.getUsers + user.name, {
                    user_group_types: params
                });

                this.userGroups = res.data.data
            }
        }
    }
</script>

<style scoped>

</style>
