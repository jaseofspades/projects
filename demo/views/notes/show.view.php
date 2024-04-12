<?php require('views/partials/head.php') ?>
<?php require('views/partials/nav.php') ?>
<?php require('views/partials/banner.php') ?>

<main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <p>
            <a href="/notes" class="text-blue-500 underline">Go back to Notes</a>
        </p>

        <p>
            <!-- 
                htmlspecialchars() is a built-in PHP function that converts special chars to HTML entities.
                This helps prevent malicious user input that takes the form of HTML to cause unintended behaviors.
            -->
            <?= htmlspecialchars($note['body']) ?>
        </p>
    </div>
</main>

<?php require('views/partials/footer.php') ?>