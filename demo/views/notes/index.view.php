<?php require('views/partials/head.php') ?>
<?php require('views/partials/nav.php') ?>
<?php require('views/partials/banner.php') ?>

<main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <ul>
            <?php foreach ($notes as $note) : ?>
                <li>
                    <a href="/note?id=<?= $note['id'] ?>" class=" text-blue-500 hover:underline">
                        <!-- 
                            htmlspecialchars() is a built-in PHP function that converts special chars to HTML entities.
                            This helps prevent malicious user input that takes the form of HTML to cause unintended behaviors.
                        -->
                        <?= htmlspecialchars($note['body']) ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>

        <!-- mt-6 === margin top = 6 -->
        <p class="mt-6">
            <a href="/notes/create" class="text-blue-500 hover:underline">Create Note</a>
        </p>
    </div>
</main>

<?php require('views/partials/footer.php') ?>