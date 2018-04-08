<template>
    <section>
    <v-layout
            class="hidden-sm-and-down"
        row
        wrap
        justify-center
    >
        <v-card>
            <v-card-title>
               <h1>Рассписание занятий</h1>
            </v-card-title>
            <v-data-table
                    class="hidden-sm-and-down"
                    :headers="headers"
                    :items="trainings"
                    :search="search"
                    hide-actions
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.timer }}</td>
                    <td class="text-xs-center"
                        v-for="(day, i) in props.item.days"
                        :key="i"
                        style="border-width: 1px 0 0 1px;
  border-style: solid; border-color: black"
                        :class="[day.groupName ? 'hasGroup' : '']"
                    >
                        <p>{{day.groupName }}</p>
                        <p>{{day.trainer }}</p>
                    </td>
                </template>
            </v-data-table>

        </v-card>
    </v-layout>
        <v-card class="hidden-md-and-up">
            <v-card>
                <v-card-title>
                    <h1>Рассписание занятий</h1>
                </v-card-title>
            </v-card>
            <v-container
                    fluid
                    style="min-height: 0;"
                    grid-list-lg
                    v-for="(training, i) in trainings"
                    :key="i"
            >
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card>
                            <v-card-title primary-title>
                                <h4>{{training.dayName}}</h4>
                            </v-card-title>
                            <hr>
                            <v-layout row wrap
                                      v-for="(item, k) in trainings"
                                      :key="k"
                            >
                                <v-flex xs3  v-if="item.days[i].groupName">
                                    <v-card-text>{{item.timer}}</v-card-text>
                                </v-flex>
                                <v-flex xs9  v-if="item.days[i].groupName">
                                    <v-layout row wrap>
                                        <v-flex>
                                            <v-card-text>
                                                <b>{{item.days[i].groupName}}</b>
                                            </v-card-text>
                                        </v-flex>
                                        <v-flex>
                                            <v-card-text>
                                                <span>{{item.days[i].trainer}}</span>
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </section>
</template>

<script>

  export default {
      components: {
      },
      name: 'Timetable',
      data () {
          return {
              methods : {
                  search() {

                  }
              },
              search: '',
              headers: [
                  {
                      text: '',
                      align: 'center',
                      sortable: true,
                      value: 'timer'
                  },
                  { text: 'Понедельник', sortable: false, align: 'center'},
                  { text: 'Вторник', sortable: false, align: 'center'},
                  { text: 'Среда', sortable: false, align: 'center'},
                  { text: 'Четверг' , sortable: false, align: 'center'},
                  { text: 'Пятница', sortable: false, align: 'center'},
                  { text: 'Суббота', sortable: false, align: 'center'},
                  { text: 'Воскресенье', sortable: false, align: 'center'}
              ],
              trainings: [
                  {
                      dayName: 'Понедельник',
                      value: false,
                      timer: '08-00',
                      days : [
                          {
                              groupName : 'Pole Dance',
                              trainer : 'Anna'
                          },
                          {
                              groupName : 'Exotic',
                              trainer : 'Eva'
                          },
                          {},{},{},{},{}
                      ]
                  },
                  {
                      dayName: 'Вторник',
                      value: false,
                      timer: '09-00',
                      days : [
                          {},{},{},
                          {},{},{},{}
                      ]
                  },
                  {
                      dayName: 'Среда',
                      value: false,
                      timer: '10-00',
                      days : [
                          {
                              groupName : 'Pole Dance',
                              trainer : 'Anna'
                          },
                          {
                              groupName : 'Exotic',
                              trainer : 'Eva'
                          },
                          {},{},{},{},{}
                      ]
                  },
                  {
                      dayName: 'Четверг',
                      value: false,
                      timer: '11-00',
                      days : [
                          {

                          },
                          {
                              groupName : 'Pole KIds',
                              trainer : 'Anna'
                          },
                          {
                              groupName : 'Exotic',
                              trainer : 'Eva'
                          },
                          {},{},{},{}
                      ]
                  },

              ]
          }
      }
}
</script>

<style scoped>
    .hasGroup {
        background-color: #4B946A;
    }
</style>
