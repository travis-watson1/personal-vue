<template>
    <div class="container-fluid resources">
        <mdb-tbl>
            <mdb-tbl-head color="warning-color-dark" textWhite>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{ item.description }}</td>
                    <td><a :href="item.url">Link</a></td>
                </tr>

            </mdb-tbl-body>
        </mdb-tbl>
    </div>
</template>


<script>
    import data from '../../data/development';
    import {
        mdbTbl,
        mdbTblHead,
        mdbTblBody
    } from 'mdbvue';

    export default {
        data() {
            return {
                items: data
            }
        },
        components: {
            mdbTbl,
            mdbTblHead,
            mdbTblBody
        }
    }
</script>