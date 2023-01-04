<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="simple_text_to_qrCode_0"></a>simple_text_to_qrCode</h1>
<p class="has-line-data" data-line-start="1" data-line-end="14">Simple text to qr code generator API<br>
API DOC :<br>
/api/generate = &gt; send get request with <em>str</em> param in order to get svg qr code of the string you passed<br><br>
request :<br>
/api/generate?str=xxxxx<br>
response:<br>
{“qrCode” : “&lt;svg&gt;&lt;/svg&gt;”}<br><br>
also you can use type param to specify output type [ “svg” ,“png”,“terminal” ]<br><br>
request<br>
/api/generate?str=xxxxx&amp;type=svg<br>
response:<br>
{“qrCode” : “&lt;svg&gt;&lt;/svg&gt;”}<br>
</p>
<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="simple_text_to_qrCode_0"></a>Installation</h1>
 
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">npm run dev</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">open browser <a href="http://localhost:8000">http://localhost:8000</a></li>
</ul>
