// Copyright © Antartica Org. All rights reserved. - United States
// SCRIPT STARTS
// LANGUAGE (en-US)

(function() {
  var Post, app;

  Post = class Post {
    constructor(title, link, author, img) {
      this.title = title;
      this.link = link;
      this.author = author;
      this.img = img;
      return;
    }

  };

  app = new Vue({
    el: '#app',
    computed: {
      filteredList: function() {
        return this.postList.filter((post) => {
          return post.title.toLowerCase().includes(this.keyword.toLowerCase());
        });
      }
    },
    data: {
      keyword: '',
      postList: [new Post('Settings', 'settings.html','', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAACq0lEQVRYw+2Xv0tbURTHT1FCrUUKUQmmiHQS3FyitlCRDg4WdAw4CF0stYJksVjRRSVQyJLNWfBfcHARhNJNYorOEgztYvxZJfLp4Mn13eTlxaTvDQXP9O5933O+9+f3nCvyaP+JsUW5bfkZPoybhf0jiLkSxPwjmHQlmPSPYFlDroqI8E1by/4RbGjIKRERprW10ViwEXJsMmLabSxQ0JBDIiK801aBBdocfpvk7v2qhQ9xqO6HJGhnnGPHqneKiNDj6MkzQTsJh1fImyBhbeON1Soopok/HqiEV/hOTnC3PCt0G9wrkvyugjy5m6c7wbqCzrlyuFwyT0sFtpWv1kwuONWv9Wrh+7lVyAxh5jgAYI/eqgPq46diPtHGrHrf0u8O31FAhmbtGWaxNHb6SJHljDOypOjT3ucsMajfzWQ1wo5b+FEz2V06Ks5WmqK10kXS5eeFCD/M/9FKggGuze8jBqzw267bue2kYJCc+XPtqlPEOHJApk1/mmqWNphpa3ix6sfUOdYxXfuicYwTIULcDKR4txeMWfPq9LoJTSQN9E4YUiZ82JEfShQpERGGjE+SptpqVHJ+KSLCvrbiFiauvfsiIkRLg3iY3F0q/KmIiLk+XRamS3tP9YDqlayPIPRgglB9BKUligawRAFvctkxfe/zMbUu2g2zPl80Yg5Ijjd1S8WApQMxL7H7TqQhsetg10PsHHK9V9ooXrNEq6dct7DIsJHrjIdcWwnnIy/4rPCMR8LpZQ+AA+YIM1Mj4ThSZsFcNoArvvCsAtvCfBnqvEbK9Ez6v1ijx+C6WSHfQNKvUbZc8ERRhQbLFpfCa8IaaVTneW/HjNdVeNUoHd9awtBI6Vij+P0gIsLUPxW/nuX7mogIq/6X74E/QAJ/QgX9CAz8GftogdpfrlA20OyLWLkAAAAASUVORK5CYII='),  new Post('App Store', 'about:blank;', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAA6UlEQVRYw+3UvQ3CMBCG4euTgnnoWICChoYh+N0tLZCKIZBYAYn6o0GWsWP82fIVSHdVMOF9FGFHxEZ70GGtmz8D2OrmAWDH/SAzyTxLlADocAm+3jcEJvIMwQLocXWLN6zwcp8OFPB7PcjPRLAgCQaI8yI0kQfQY4zzEXGsBNJ5ksgCg7t6hHkRESy9HbGpAeZ4uutTdJf/fCP6uv8gSRB5chdNElSePWgxQeYLTvIXQeeL3kU+cSfzhW9Tn+DypRMQrfMBoZH3CK38hxjoPL1NCzaDAXVAbp29zwAD/hlQP2gGiI1N03kDkms26Qs72ZgAAAAASUVORK5CYII='), new Post('To Do List', 'https://antartica10000.github.io/antartica.org/todolist','', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAZ0lEQVRYw+3UQQrAIAxEUTd6cxMvaq7xu2ld1U0hhZZ5SwkMJDiliMibaDhB4LScgMFlnC8P7QLmmpgfDUhfUfaRRdRF6iJ1kfykiypGEBg1J8DXT3F10X2ArQnLCah0gqAnHVlEshxlGFtivIWEbwAAAABJRU5ErkJggg=='), new Post('Calculator', 'calculator.html', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAA+klEQVRYw+2XPQ6DMAxGLeUYvQgrEyfgHr0BB0CiAysrRRyMTl2ZGF4HUtQWSkXqqKDyecng+Cm28yeya5eyOFBywVUXSg7z4a98q+sMghINle8BjQqgeQ+wcq7gp/krAhBzxoiIYDgTKwOI6YAag6EGuh6hB0itY01tR+liABGnkUWDZ/bUN5lDikgmGjB58M1ew6sCbO7viTIugIDjyIIhfPUErmxHqRW5sI45uR0VuoCQFshFRMiBllB7o4V9Y9qmDbd3VGwJsASpBiAZmy5gQusDTF+3iimaA6gU2fsKtl/kn+6Dfz7svD9+vT/ffX9AvH+hdu1y0g3uh7hBwqJWAAAAAABJRU5ErkJggg=='), new Post('Notepad', 'notes.html', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAqElEQVRYw+3XsQ2AIBCFYfZwECdwAqfRfZhEV9HKwsLaZ2UhEMO73JmY3F8LX4EQCMHzlEODiBU1HZjR89Nv4Bo5IIKPIbAApsQ9ourbFjtNMICI4AABwQI0kQJvKysiJABFyICEGAyAB3GiU1zkIjGZACGgvY9BI6Bi/OdA7WnngB3w/7/I94EDvg9+Ccguv2mL7vU9L2o+QPI2NDpPqFIr4uv0nifqAus3dvTJ3PmRAAAAAElFTkSuQmCC'),  new Post('Clock', 'about:blank;', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAACSElEQVRYw+2Xu04bQRSGD1oJRVyCLbmKoDEI+QkClhES1GnccnmC5BlwAQ/AA0RIoHRcCjoKy6LY1iiFJYQUUdKgFFBQWPGXwrPrSZjZuViRUvCXO/85/8y5zazIG2LBBIve3EUmQt1Pc8EjVS9ulUcumA5xv8ANAD3mnNw5egDcsODrfoUHMpw42Sc594EVH/dbvOQmXead/Hl1WoAXtlyJ3WeE8yyulNnliA53PPPMHR2O2KWs5WuEfWvCmeJMIx4MiTRp08eEPm2aamMH2vczpsxH7WpH3RYRoUGKCykNERG2HaHlWEvWqggJh/jikESE1cLi4L1ebpS4+sNFlxabLDHDDEts0tLOC3BFyVneo4ahpMSGOKVmzFmNU43Vo+Rs0GHLk2i7v6deWHd17rVTJF4jRov9NRVnH1S4HuXCp9EamvvJv9YAeGUxqUk03AJpHpxXuzcLiFDJA5W63DcVcWCKvU1AhDoDZdksFmhn3WhctQqI5FOgXeS+rIbCwFKYRQI1dYZ+NqNMpJ2srSzrBQIieevt2AWycbEXJbCnrI/tAh1F2YgS2FDWHbvAraIsRwksK+tbu8CTosxGCcwq66cxBfgYL+AVIn7x1TSjfELkSvInfijGT76QhCfZUaYivKOVX43fWQ8tU0ejKVaVy3x6fuNDSKM5RoUxWGnAqHANO0OwBqwFDDvXuDYE63PguC6+cKw2/hdO8ZVpsQi7Mv/5pT/us8VPIvrh5Y24p2MQwh+/EQh5vkfD5wdkbBT/Qr3hf8dv5oUGp5GtE7cAAAAASUVORK5CYII='), new Post('Terms', '?c=terms', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAA60lEQVRYw+3VMQrCQBCF4QUbsRJPkdYgBCy8rtgEWxUtLC08iYiI/XMNQUKyG3eSeYWuc4D/C8OwMSaywRhbzJj5E4AriSjzIBGVPIOo5fUJHNAcTQJz3L+TwAQpkbD5M27ISESRfw2HeOfDiLxP/jOxx6hfvp2Q5m0gtTkEEvJ8EcgCiW75YGIt3/0Ri3Ci2+U8SETlchhE7TC1Ccfd6xLYOQKaBKa4/InYiVzyRsmJDYayZ1BG1PLahCOvSXjyWsTSn6f8L6IjEi6xwsAYHqGbbxDNPITTSri+XgMoCfdydADbSTy71wJ+c575qrecn1ar2QAAAABJRU5ErkJggg=='), new Post('Privacy', '?c=privacy', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAA+UlEQVRYw+2WMQ6CQBBFCYkdnIBDUOI1KDgUdHoF3TsRKAlUVNrYPZuVREWEHdbEsL/kh//YGQbG8zYidmScqLhypeJExm7N+JSaV9Wk64T75HxSji8HFEypkBfnoRsH9gQE7DlwG66nstY+at8QPzkxzdAL83aTDU8fv3nxcIrMHHDWEcdR96jdszmg1BHJqJtotzQHXHREOOqG2r2YA7RMfQcwBRCh6FiqDkU0L77HVP0MBAqJ1HdAKwK04saK73OATQP0hH+YWDHgacJHJlYOUNMTKwe00xP7BwDrJbLdZOuvqftUOMACgPWfvvW1xfbiZX11dPq57oDguStevqM7AAAAAElFTkSuQmCC'), new Post('Accessibility', 'about:blank;', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAW0lEQVRYhe3SwQkAIRAEQfMw/g1NX+Yw9zrQp+IgC90BTMFqKZQoVYW6ukLVMz/0NwyEQnNxH2gL0BIC9hO5H9n+TXOkSwGcA7vw9hAAAAAAwDQIAAAA8AIgax9Rppl+1hcvAwAAAABJRU5ErkJggg=='), new Post('Share', '?c=share', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABm0lEQVRYw+2VsUqCYRSGj4M26eIgpoGLdQUaQeRsdA/WLDoVdAviNajw34CL5NSqv+HgKi1N1SCCNTno09DXx69WBJ5vCHy3s7yP/3fe8yqy078XEar0eeedPlUi2vYpRgQ1IqX761ftPxF6X0GF71TRA/jGskuaNF0z+XqAN2N5ICLCgZne9ABTpwByTJw9EQmaLMDJkglzzYyftG1MKTK2ZktaDBUPjSydgJlPXoQIZXoKVUGUGnNr/kyJkF4cQ5R4tuZzakQ12rFHmYgIeXuxAB2ymu04pMXSTmOK+u34pRnXhN20IyxoknDXjhNybttx6rp+FQHOn8j5kn+P6c3WMf3DoZ1rfMV6VRwzCCDvOBRtEeKSl0DZ1YnpQ2LUA3X9ypViXVvIoY0uwAMnIiKc0sDHp8mZBuSCx8BfpkdrJRQeexoxuLU3vylP57H28QLxXVVBayMnPBnLe4444t5MDb2l94xlRkSEjJkGeoCvA0yKiJDUBzSMZZs4cdr6T1RwumQRETxHMbWAvTWExqFtQM5oKlbFTur6AEfWlu1Qg1zXAAAAAElFTkSuQmCC'), new Post('Info', '?c=about', '', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABn0lEQVRYw+2XQarCMBCGo7gRKoIupTvxCgVXPYXewV6gu+70BPUU3elCPIbeQEEFPYCuvrdpQqVtGi3N48Gb7fyZP5nJP5kI8W9/wGjhEZJw4ALAhQMJIR6t+sFHrDhTZmdWjL4PPiDmSZU9iRl8E37GA1N7MPsseIf1W4AXewJ8xjg4jPEJ2PN6w6zpmIbvssksvBHQK8T1CLhlkBu6ZrvfZvIb4WjRDlGmTluDU2SSc2NqdOJp5hzrKvBcQY+4xjVzOap1cx1wyF3t3v3oWrjqFHeG5bBY5b4wOXKTJYmStYjLVSshUQlCQyAEkdpesbpZpoBr2c2pIHC4poBlkbvNKXUvSlOoJRCCRQo40c47PaXa/tfdq6/U7eWdYera1eq+uzRKmHclqSuoRRCkUZK8S0rFr0XgS5nmXVJiE83yiiILwUTKLe+SGujVIuhJLfwCQeMpMiiyAYGmyAbX1IBAc00NhGZAoBGaQauo7EXaVtF0s2u8XVt4cBp/Mi08+o2PLRYGLwujY+PDr4Xx3cIHxMoXysIn0Mo39t8s2A/xu5NR8vh4WAAAAABJRU5ErkJggg=='),]
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLElBQUEsRUFBQTs7RUFBTSxPQUFOLE1BQUEsS0FBQTtJQUNFLFdBQWEsTUFBQSxNQUFBLFFBQUEsS0FBQSxDQUFBO01BQUMsSUFBQyxDQUFBO01BQU8sSUFBQyxDQUFBO01BQU0sSUFBQyxDQUFBO01BQVEsSUFBQyxDQUFBO0FBQ3JDO0lBRFc7O0VBRGY7O0VBSUEsR0FBQSxHQUFNLElBQUksR0FBSixDQUNKO0lBQUEsRUFBQSxFQUFJLE1BQUo7SUFFQSxRQUFBLEVBQ0U7TUFBQSxZQUFBLEVBQWMsUUFBQSxDQUFBLENBQUE7QUFDWixlQUFPLElBQUMsQ0FBQSxRQUFRLENBQUMsTUFBVixDQUFpQixDQUFDLElBQUQsQ0FBQSxHQUFBO0FBQ3RCLGlCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBWCxDQUFBLENBQXdCLENBQUMsUUFBekIsQ0FBa0MsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQUEsQ0FBbEM7UUFEZSxDQUFqQjtNQURLO0lBQWQsQ0FIRjtJQU9BLElBQUEsRUFDRTtNQUFBLE9BQUEsRUFBUyxFQUFUO01BQ0EsUUFBQSxFQUFVLENBQ1IsSUFBSSxJQUFKLENBQVMsUUFBVCxFQUFtQixvQkFBbkIsRUFBeUMsT0FBekMsRUFBa0Qsb0NBQWxELENBRFEsRUFFUixJQUFJLElBQUosQ0FBUyxVQUFULEVBQXFCLG1DQUFyQixFQUEwRCxLQUExRCxFQUFpRSx3RUFBakUsQ0FGUSxFQUdSLElBQUksSUFBSixDQUFTLFlBQVQsRUFBdUIsd0JBQXZCLEVBQWlELEtBQWpELEVBQXdELHVDQUF4RCxDQUhRLEVBSVIsSUFBSSxJQUFKLENBQVMsVUFBVCxFQUFxQixxQkFBckIsRUFBNEMsUUFBNUMsRUFBc0QsdUVBQXRELENBSlEsRUFLUixJQUFJLElBQUosQ0FBUyxXQUFULEVBQXNCLHlCQUF0QixFQUFpRCxPQUFqRCxFQUEwRCwyRUFBMUQsQ0FMUSxFQU1SLElBQUksSUFBSixDQUFTLFNBQVQsRUFBb0Isb0JBQXBCLEVBQTBDLEtBQTFDLEVBQWlELDZDQUFqRCxDQU5RLEVBT1IsSUFBSSxJQUFKLENBQVMsU0FBVCxFQUFvQix3QkFBcEIsRUFBOEMsV0FBOUMsRUFBMkQscUNBQTNELENBUFEsRUFRUixJQUFJLElBQUosQ0FBUyxRQUFULEVBQW1CLHFCQUFuQixFQUEwQyxNQUExQyxFQUFrRCwyREFBbEQsQ0FSUSxFQVNSLElBQUksSUFBSixDQUFTLGFBQVQsRUFBd0Isd0JBQXhCLEVBQWtELE9BQWxELEVBQTJELHNEQUEzRCxDQVRRO0lBRFY7RUFSRixDQURJO0FBSk4iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQb3N0XG4gIGNvbnN0cnVjdG9yOiAoQHRpdGxlLCBAbGluaywgQGF1dGhvciwgQGltZykgLT5cbiAgICByZXR1cm5cblxuYXBwID0gbmV3IFZ1ZVxuICBlbDogJyNhcHAnXG4gIFxuICBjb21wdXRlZDpcbiAgICBmaWx0ZXJlZExpc3Q6IC0+XG4gICAgICByZXR1cm4gQHBvc3RMaXN0LmZpbHRlciAocG9zdCkgPT5cbiAgICAgICAgcmV0dXJuIHBvc3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyBAa2V5d29yZC50b0xvd2VyQ2FzZSgpXG4gIFxuICBkYXRhOlxuICAgIGtleXdvcmQ6ICcnXG4gICAgcG9zdExpc3Q6IFtcbiAgICAgIG5ldyBQb3N0KCdWdWUuanMnLCAnaHR0cHM6Ly92dWVqcy5vcmcvJywgJ0NocmlzJywgJ2h0dHBzOi8vdnVlanMub3JnLy9pbWFnZXMvbG9nby5wbmcnKVxuICAgICAgbmV3IFBvc3QoJ1JlYWN0LmpzJywgJ2h0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0LycsICdUaW0nLCAnaHR0cHM6Ly9kYXluaW4uZ2l0aHViLmlvL2Nsb2p1cmVzY3JpcHQtcHJlc2VudGF0aW9uL2ltZy9yZWFjdC1sb2dvLnBuZycpXG4gICAgICBuZXcgUG9zdCgnQW5ndWxhci5qcycsICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJywgJ1NhbScsICdodHRwczovL2FuZ3VsYXJqcy5vcmcvaW1nL25nLWxvZ28ucG5nJylcbiAgICAgIG5ldyBQb3N0KCdFbWJlci5qcycsICdodHRwOi8vZW1iZXJqcy5jb20vJywgJ1JhY2hlbCcsICdodHRwOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvMGNmMTU2NjVhOTE0NmJhODUyYmYwNDJiMDY1Mjc4MGE/cz0yMDAnKVxuICAgICAgbmV3IFBvc3QoJ01ldGVvci5qcycsICdodHRwczovL3d3dy5tZXRlb3IuY29tLycsICdDaHJpcycsICdodHRwOi8vaGFja3RpdmlzdC5pbi9pbnRyb2R1Y3Rpb24tdG8tbm9kZWpzLW1vbmdvZGItbWV0ZW9yL2ltZy9tZXRlb3IucG5nJylcbiAgICAgIG5ldyBQb3N0KCdBdXJlbGlhJywgJ2h0dHA6Ly9hdXJlbGlhLmlvLycsICdUaW0nLCAnaHR0cHM6Ly9jZG4uYXV0aDAuY29tL2Jsb2cvYXVyZWxpYS1sb2dvLnBuZycpXG4gICAgICBuZXcgUG9zdCgnTm9kZS5qcycsICdodHRwczovL25vZGVqcy5vcmcvZW4vJywgJ0EuIEEuIFJvbicsICdodHRwczovL2NvZGUtbWF2ZW4uY29tL2ltZy9ub2RlLnBuZycpXG4gICAgICBuZXcgUG9zdCgnUHVzaGVyJywgJ2h0dHBzOi8vcHVzaGVyLmNvbS8nLCAnQWxleCcsICdodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzczOTU1MD92PTMmcz00MDAnKVxuICAgICAgbmV3IFBvc3QoJ0ZlYXRoZXJzLmpzJywgJ2h0dHA6Ly9mZWF0aGVyc2pzLmNvbS8nLCAnQ2h1Y2snLCAnaHR0cHM6Ly9jZG4ud29ybGR2ZWN0b3Jsb2dvLmNvbS9sb2dvcy9mZWF0aGVyc2pzLnN2ZycpXG4gICAgXVxuIl19
//# sourceURL=coffeescript

// SCRIPT ENDS
// Copyright © Antartica Org. All rights reserved. - United States
