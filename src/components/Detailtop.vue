<template>
  <div class="detail-top">
    <div class="left"  @click="$router.go(-1)">
      <i class="left-1"></i>
      <i class="left-2">返回</i>
    </div>
    <slot> </slot>
    <div class="right">
      <router-link class="right-book" to="/bookshelf"></router-link>
      <router-link class="right-home" to="/seller"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detailtop",
};
</script>

<style scoped>
.detail-top {
  display: flex;
  font-size: 12px;
  background: #b93321;
  height: 44px;
  line-height: 44px;
}
.left {
  width: 25%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
}
.left-1 {
  width: 15px;
  height: 44px;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAD7ElEQVR4Xu3d63XbMAxAYXKyppukmySTtN2o3aQbuMeJfeI4lgiSEAkCN39DypLuZ8mm88iJryFn4HQ6PaeUvuWcfwx5QOGDZOE4hnWcgUv8n5dN/LKEAAAdYSVT7+Jfp5hBAABJxcYxG/FNIQBAY9zStEJ8MwgAUCrZ8H1hfBMIANAQeG9KZfzpCACgCKAx/lQEAFAC0Bl/GgIAKABQin/dk9ec84vCbok2AQDRadoepBz/b0rpKef8r3O3xNMBID5VXweuHv98RABoBOAhPgCCxwdAAwAvz/zroXMLqEDgLT5XgODxASAE4PGZzy2A+G9ngNcAOxA8P/O5AhSuABHicwXYQBAlPgAeAIgUHwB3AKLFB8ANgIjxAXABEDU+AFJKkeOHBxA9fmgAxH+//4VcCST+x6vfcACI//m9bygAxP+68hUGAPEfr3uHAED87U++3AMg/v7Hnq4BEL/8Uy9uARC/HN/tOgDxZfFdAiC+PL47AMSvi+8KAPHr47sBQPy2+C4AEL89/vIAiN8Xf2kAxO+PvywA4uvEXxIA8fXiLweA+LrxlwJAfP34ywAg/jHxlwBA/OPimwdA/GPjmwZA/OPjmwVA/DHxTQIg/rj45gAQf2x8UwCIPz6+GQDEnxPfBADiz4s/HQDx58afCoD48+NPA0B8G/GnACC+nfjDARDfVvzVAfxJKX0f+R+27OXr36PhvxyqfBUAQaeB4QDO+wuCzmqK06cAAIFiwc5NTQMAgs5yStOnAgCBUsWOzUwHAIKOegpTTQAAgULJxk2YAQCCxoKd00wBAEFnzYbp5gCAoKFixxSTAEDQUbRyqlkAIKgs2TjcNAAQNFatmGYeAAgqajYMXQIACBrKCqcsAwAEwqKVw5YCAILKuoLhywEAgaBqxZAlAYCgonBh6LIAQKCDYGkAIOhHsDwAEPQhcAEABO0I3AAAQRsCVwBAUI/AHQAQ1CFwCQAEcgRuAYBAhsA1ABCUEbgHAIJ9BCEAgGAbQRgAIHiMIBQAEHxFEA4ACD4jCAkABB8IwgIAwTuC0ABAAIC3Z0Hkv1kU/gpwvRtGRQCAmxfFEREA4O6tcTQEAHiwQBYJAQA2lsmjIADAzodlERAAoPCRuXcEACj/zITrdQIACAB4XiwCgBCAVwQAqADgEQEAKgF4QwCABgCeEACgEYAXBADoAOABAQA6ARyA4DXn/KKwW6JNAEB0msqDlFYMf+ecn8uPpjcCAHrnsnfFcHj886EDQBFAx+1gSnwAKMe/bq7ydjAtPgAOAlBxJZgaHwAHAhAgmB4fAAcD2EFgIj4ABgB4gMBMfAAMAnCD4Gn0+/zSIf4HnJnqn1/5JcgAAAAASUVORK5CYII=)
    no-repeat;
  background-size: 125%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.left-2 {
  display: inline-block;
  width: 24px;
  height: 44px;
  font-style: normal;
  color: #fff;
  padding-left: 5px;
  /* line-height: 44px; */
}
/* .contanier{

} */
.right {
  width: 25%;
  text-align: right;
  height: 44px;
}
.right-book {
  width: 25px;
  margin-right: 10%;
   height: 44px;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg==)
    no-repeat 50%;
  background-size: 100%;
}
.right-home {
  width: 25px;
   height: 44px;
    margin-right: 10%;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC2UlEQVRoQ+2ZS6hOURTHf39JKOUxlfKOUkpMFEZSl5tCed0kBl7FNVKUujHFgC4jeRR5xFBSUmZKSvLOjYEBIQlJllaO+nC/c/bZ55z7fW5nTb7B2Xut9dv/dfZeZ39ikJgGCQc1SLspWStSK1LRClRaWmbWBcwFXgC9kr5WxFHdrmVmR4CdDYlfA9ZKel8FTOmKmJn7PAZs7SfhGwnMm7JhSgUxszHAaWBpSqLXgTWS3pUJUxqImY0CLgBLAhK8CWyQ9CpgbNCQUkASiEvA4qCovwY9AZZJ8t/CVhjEzMYBDrEoIpunQIck/y1khUDMbFbyTswukEUf0CnpfgEf8duvmXnyrsTkIgkkc58DKyXdi/UVpUgCcR6YHhu4n3mPgS5Jd2J85gYxsznAGWBGTMCMOR+BTZJc6VyWC8TMOoCzwOhcUfIN/gKsk3Qlz7RgEDNbDpwDhucJEDnWYbyduRo6PwjEzFYkSgwExO/cvcFcL+lyCEwmiJmtBk4OkBJ/5+wwGyX5xpJqTUHMbAiwB9gPDMtyVOHzb8Au4ISkH83ipIF4OV2E+LOmRDgDVqWVWRpIN3CoxGSKutot6XCMImOBHuCDd6rA+KKZRMz3c8V3ypfA8bTWP/Nl9+Bm9gCYGZFI0SmvgWmSPmU5CgXxVntqlrMKnvuX5AJJj7J8/w8gCyU9rEEaV8DMWllatSL/lGOEIt5a3AY+JweqH2gjgfnAiKx6b3juL3vLFLkLbAaeAd8bQIYm3zDeLUwIhGkpSI8k78/6NTPz09l7pxBrKcg2Sb0pIFv8HjiEAmgpyA5JfmXaTJHtwNEapMkKVHGyt7UifhM4JbAcygR56zeYkrxpTbVQRfwCbVKWs+R5mSB+Yz9PkscvBeSWd6FZzioA6ZM0MSRuqCKdwKnA+6x9kg6m7Fp7gQMhyQHdkvyfr0wLAsn00gYDapA2EOGPFGpFakUqWoFBU1o/ASNuD0IW//0zAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>