\echo "Delete and recreate kamikazee_karaoke database?"
\prompt "Return for yes or control-c to cancel > " foo

DROP DATABASE kamikazee_karaoke;
CREATE DATABASE kamikazee_karaoke;
\connect kamikazee_karaoke;

\i kamikazee_karaoke.schema.sql
\i kamikazee_karaoke-seed.sql

\echo "Delete and recreate kamikazee_karaoke_test db?"
\prompt "Return for yes or control-C to cancel > " foo

DROP DATABASE kamikazee_karaoke_test;
CREATE DATABASE kamikazee_karaoke_test;
\connect kamikazee_karaoke_test;

\i kamikazee_karaoke.schema.sql