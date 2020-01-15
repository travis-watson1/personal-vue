<template>
    <div class="container-fluid resources">
        <mdb-tbl>
            <mdb-tbl-head color="black" textWhite>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>

            </mdb-tbl-body>
        </mdb-tbl>
    </div>
</template>


<script>
    import data from '../../data/gems';
    import {
        mdbTbl,
        mdbTblHead,
        mdbTblBody
    } from 'mdbvue';

    export default {
        data() {
            return {
                gemItems: data
            }
        },
        components: {
            mdbTbl,
            mdbTblHead,
            mdbTblBody
        }
    }
</script>