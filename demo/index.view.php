<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo</title>
</head>
<body>
    <h1>Recommended Books</h1>
    <ul>
        <?php foreach ($filteredItems as $item) : ?>
            <li>
                <a href="<?= $item['purchaseUrl'] ?>">
                    <?= $item['name'] ?> (<?= $item['releaseYear'] ?>) - By <?= $item['author'] ?>
                </a>   
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>