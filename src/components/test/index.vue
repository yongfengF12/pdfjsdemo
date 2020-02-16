<template>
	<c-pdf :pdfurl="pdfUrl"></c-pdf>
</template>
<script type="text/javascript">
	import  CPdf from "./CPdf";
	export default {
		data(){
			return {
				pdfUrl:"http:118.25.23.208:8071/test.pdf"
			}
		},
    name: 'c-pdf',
    components:{ CPdf }
  }

	
</script>