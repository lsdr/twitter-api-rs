(function() {var implementors = {};
implementors["bytes"] = [{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/buf/struct.Reader.html\" title=\"struct bytes::buf::Reader\">Reader</a>&lt;B&gt;",synthetic:false,types:["bytes::buf::reader::Reader"]},];
implementors["hyper_tls"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"hyper_tls/enum.MaybeHttpsStream.html\" title=\"enum hyper_tls::MaybeHttpsStream\">MaybeHttpsStream</a>&lt;T&gt;",synthetic:false,types:["hyper_tls::stream::MaybeHttpsStream"]},];
implementors["libflate"] = [{text:"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"libflate/deflate/struct.Decoder.html\" title=\"struct libflate::deflate::Decoder\">Decoder</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["libflate::deflate::decode::Decoder"]},{text:"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"libflate/gzip/struct.Decoder.html\" title=\"struct libflate::gzip::Decoder\">Decoder</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["libflate::gzip::Decoder"]},{text:"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"libflate/gzip/struct.MultiDecoder.html\" title=\"struct libflate::gzip::MultiDecoder\">MultiDecoder</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["libflate::gzip::MultiDecoder"]},{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"libflate/non_blocking/deflate/struct.Decoder.html\" title=\"struct libflate::non_blocking::deflate::Decoder\">Decoder</a>&lt;R&gt;",synthetic:false,types:["libflate::non_blocking::deflate::decode::Decoder"]},{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"libflate/non_blocking/gzip/struct.Decoder.html\" title=\"struct libflate::non_blocking::gzip::Decoder\">Decoder</a>&lt;R&gt;",synthetic:false,types:["libflate::non_blocking::gzip::Decoder"]},{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"libflate/non_blocking/zlib/struct.Decoder.html\" title=\"struct libflate::non_blocking::zlib::Decoder\">Decoder</a>&lt;R&gt;",synthetic:false,types:["libflate::non_blocking::zlib::Decoder"]},{text:"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"libflate/zlib/struct.Decoder.html\" title=\"struct libflate::zlib::Decoder\">Decoder</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["libflate::zlib::Decoder"]},];
implementors["mio"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>",synthetic:false,types:["mio::net::tcp::TcpStream"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>",synthetic:false,types:["mio::net::tcp::TcpStream"]},];
implementors["mio_uds"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio_uds/struct.UnixStream.html\" title=\"struct mio_uds::UnixStream\">UnixStream</a>",synthetic:false,types:["mio_uds::stream::UnixStream"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio_uds/struct.UnixStream.html\" title=\"struct mio_uds::UnixStream\">UnixStream</a>",synthetic:false,types:["mio_uds::stream::UnixStream"]},];
implementors["native_tls"] = [{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"native_tls/struct.TlsStream.html\" title=\"struct native_tls::TlsStream\">TlsStream</a>&lt;S&gt;",synthetic:false,types:["native_tls::TlsStream"]},];
implementors["openssl"] = [{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslStream.html\" title=\"struct openssl::ssl::SslStream\">SslStream</a>&lt;S&gt;",synthetic:false,types:["openssl::ssl::SslStream"]},];
implementors["rand_core"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>",synthetic:false,types:["rand_core::RngCore"]},];
implementors["reqwest"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"reqwest/struct.Response.html\" title=\"struct reqwest::Response\">Response</a>",synthetic:false,types:["reqwest::response::Response"]},];
implementors["tokio_core"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>",synthetic:false,types:["tokio_core::net::tcp::TcpStream"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>",synthetic:false,types:["tokio_core::net::tcp::TcpStream"]},{text:"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt;",synthetic:false,types:["tokio_core::reactor::poll_evented::PollEvented"]},{text:"impl&lt;'a, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["tokio_core::reactor::poll_evented::PollEvented"]},];
implementors["tokio_fs"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_fs/file/struct.File.html\" title=\"struct tokio_fs::file::File\">File</a>",synthetic:false,types:["tokio_fs::file::File"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_fs/struct.Stdin.html\" title=\"struct tokio_fs::Stdin\">Stdin</a>",synthetic:false,types:["tokio_fs::stdin::Stdin"]},];
implementors["tokio_io"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_io/io/struct.AllowStdIo.html\" title=\"struct tokio_io::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::allow_std::AllowStdIo"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadHalf.html\" title=\"struct tokio_io::io::ReadHalf\">ReadHalf</a>&lt;T&gt;",synthetic:false,types:["tokio_io::split::ReadHalf"]},];
implementors["tokio_reactor"] = [{text:"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_reactor/struct.PollEvented.html\" title=\"struct tokio_reactor::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["tokio_reactor::poll_evented::PollEvented"]},{text:"impl&lt;'a, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tokio_reactor/struct.PollEvented.html\" title=\"struct tokio_reactor::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["tokio_reactor::poll_evented::PollEvented"]},];
implementors["tokio_tcp"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_tcp/struct.TcpStream.html\" title=\"struct tokio_tcp::TcpStream\">TcpStream</a>",synthetic:false,types:["tokio_tcp::stream::TcpStream"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tokio_tcp/struct.TcpStream.html\" title=\"struct tokio_tcp::TcpStream\">TcpStream</a>",synthetic:false,types:["tokio_tcp::stream::TcpStream"]},];
implementors["tokio_tls"] = [{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_tls/struct.TlsStream.html\" title=\"struct tokio_tls::TlsStream\">TlsStream</a>&lt;S&gt;",synthetic:false,types:["tokio_tls::TlsStream"]},];
implementors["tokio_uds"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_uds/struct.UnixStream.html\" title=\"struct tokio_uds::UnixStream\">UnixStream</a>",synthetic:false,types:["tokio_uds::stream::UnixStream"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tokio_uds/struct.UnixStream.html\" title=\"struct tokio_uds::UnixStream\">UnixStream</a>",synthetic:false,types:["tokio_uds::stream::UnixStream"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
