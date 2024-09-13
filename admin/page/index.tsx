import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
       
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="images/favicon.ico" type="image/ico" />

    <title>Gentelella Alela!</title>

    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet" />
    <link href="../vendors/iCheck/skins/flat/green.css" rel="stylesheet" />
	
    <link href="../vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" />
    <link href="../vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet" />
    <link href="../vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />

    <link href="../build/css/custom.min.css" rel="stylesheet" >

      </Head>
      <div className="container">
        <h1>Hello, world!</h1>
        <p>This is my HTML page.</p>
      </div>
      <script src="/scripts.js"></script>
    </div>
  );
}
