function timer(t){var o=new Date(t),s=Date.parse(o);setTimeout(function t(){var o=Date.now(),h=s-o;if(h<=0)return!1;var a=h%1e3,m=(h=Math.floor(h/1e3))%60;m<10?($(".seconds_1").html(0),$(".seconds_2").html(m)):($(".seconds_1").html(Math.floor(m/10)),$(".seconds_2").html(m%10));var r=(h=Math.floor(h/60))%60;r<10?($(".minutes_1").html(0),$(".minutes_2").html(r)):($(".minutes_1").html(Math.floor(r/10)),$(".minutes_2").html(r%10));var e=(h=Math.floor(h/60))%24;e<10?($(".hours_1").html(0),$(".hours_2").html(e)):($(".hours_1").html(Math.floor(e/10)),$(".hours_2").html(e%10));var l=Math.floor(h/24);l<10?($(".days_1").html(0),$(".days_2").html(l)):($(".days_1").html(Math.floor(l/10)),$(".days_2").html(l%10)),setTimeout(t,a)},0)}$(document).ready(function(){timer($(".timer").attr("data-finish"))});
