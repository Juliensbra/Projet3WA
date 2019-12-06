<?php

require_once 'database.php';

/**************ENVOI DE MAILS + INSERTION DES MAILS DANS LA BDD*********************/


		if(isset($_POST['name'], $_POST['mail'], $_POST['content']) && !empty($_POST['name'] && $_POST['mail'] && $_POST['content']))
		{

			$query = 'INSERT INTO form(name,mail,content) VALUES(?, ?, ?)';

			$result = $pdo->prepare($query);
			$result->execute([$_POST['name'], $_POST['mail'], $_POST['content']]);

					$header = "MIME-VERSION: 1.0\r\n";
					$header.='From:"js.com"<webmaster@subra-portfolio.com>'."\n";
					$header .= 'Content-type:text/html; charset="utf-8"'."\n";
					$header .= 'Content-Transfer-Encoding: 8bit';

					$message = '
					<html>

						<body>

							<div align="center">

								<u>Nom de l\'expediteur :</u>'.htmlspecialchars($_POST['name']).'<br>
								<u>Mail de l\'expediteur :</u>'.htmlspecialchars($_POST['mail']).'<br>
								'.nl2br(htmlspecialchars($_POST['content'])).'

							</div>


						</body>

					</html> ';

					mail("jeandouille31@gmail.com", "test", $message, $header);

			echo "<div class='alert alert-success'>Message envoyé !</div>";

		}else{

			echo "<div class='alert alert-danger'>Veuillez compléter tous les champs</div>";
		}
