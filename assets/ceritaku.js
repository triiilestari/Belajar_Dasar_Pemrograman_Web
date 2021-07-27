(function() {
    var searchForm = document.getElementById('search-form'),
        textInput = searchForm.cari,
        clearBtn = textInput.nextSibling;
    textInput.onkeyup = function() {
        // menampilkan tanda clear jika form input tidak kosong
        clearBtn.style.visibility = (this.value.length) ? "visible" : "hidden";
    };
    // menyembunyikan tanda clear setelah di klik dan menghapus isi form
    clearBtn.onclick = function() {
        this.style.visibility = "hidden";
        textInput.value = "";
    };
})();

function terimainput() {
	alert("Kritik, Saran, dan Komentar telah dikirim");
}
$(function() {
    $(".nav-button").click(function() {
      $(this).parent().parent().toggleClass("closed");
    });
  });
