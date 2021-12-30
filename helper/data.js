const poguesTitleData = "The Pogues - Fairytale of New York"
const poguesContentData = `{t:Fairytale Of New York}
{st:The Pogues}

[G/D]    	[D]  [G/D]     
[Asus4/E]	[D]  [G/D]    

It was Christmas [D]Eve babe In the [G]drunk tank
An old man [D]said to me, won't see an[G/A]other one [A] And then he [D]sang a song
The Rare Old [G]Mountain Dew And I turned my [D]face away
And [G]dreamed a[Asus4/E]bout    [D]you[G/A]

Got on a [D]lucky one Came in eight[G]een to one
I've got a [D]feeling This year's for [G/A]me and you[A]
So happy [D]Christmas I love you [G]baby
I can see a [D]better time When [G]all our d[Asus4/E]reams come [D]true
 
[G/D] [D] [G/D] [Asus4]           
{comment: faster now}
[D] [A]  [D [G] [A] [D]
 
They've got [D]cars
Big as [A]bars
They've got [Bm]rivers of [G]gold
But the [D]wind goes right through you
It's no place for the [A]old
When you [D]first took my [Bm]hand
On a [D]cold Christmas [G]Eve
You [D]promised me
Broadway was [A]waiting for [D]me
You were [D]handsome
 
You were pretty
Queen of New York [A]City
When the [D]band finished [G]playing
They [A]howled out for [D]more
[D]Sinatra was swinging
All the drunks they were [A]singing
We [D]kissed on the [G]corner
Then [A]danced through the [D]night
The [G]boys of the NY[Bm]PD [A]choir
Were [D]singing 'Galway [Bm]Bay'
And the [D]bells were [G]ringing
[A]Out for Christmas [D]da[A]y [Bm]   [G]   [D]  [A]   [D]  [Bm]   [D]  [G]    [D]  [A]  [D] 
 
[D]You're a bum
You're a [D]punk
You're an old slut on [A]junk
Living [D]there almost [G]dead on a [A]drip
In that [D]bed
You [D]scum bag
 
You maggot
You cheap lousy [A]faggot
Happy [D]Christmas your [G]arse
I pray [A]God
It's our [D]last[A][D]
 
[A]I could have [D]been someone
So could [G]anyone
You took my [D]dreams
From me when I first [A]found you
I kept them [D]with me babe
I put them [G]with my own
Can't make it [D]all alone
I've built my [G]dreams [A]around [D]you
`
// const nordTitleData = "Gustaf Nordqvist - Jul, jul strålande jul"
// const nordContentData = `{title: Jul, jul, strålande jul}
// {subtitle: Nordquist}

// J[F]ul, j[Bbm6]ul, str[F]ålande j[Bbm6]ul
// Gl[F]ans över v[Fmaj]ita sk[Bb/F]o[Bbm/F]g[F]ar

// H[Bb]immelens kr[C]onor med gn[Bb]istrande lj[C]us
// Gl[Gm]immande b[A]ågar i [Gm]alla Guds h[A]us
// Ps[Bb/D]alm som är sj[F/A]ungen från t[C6]id till t[Bb]id
// [Gm/Bb]Eviga l[Dm]ängtan till lj[Gm/Bb]us och fr[A]id

// J[F]ul, j[Bbm6]ul, str[F]ålande j[Bbm6]ul
// Gl[F]ans över v[Fmaj/A]it[Bb]a sk[C9-8-7]og[F]ar

// Kom, kom, signade jul
// Sänk dina vita vingar

// Över stridernas blod och larm
// Över all suckan ur människobarm
// Över de släkten som gå till ro
// Över de ungas dagande bo

// Kom, kom, signade jul
// Sänk dina vita vingar`

const hallelujahTitleData = "Leonard Cohen - Hallelujah"
const hallelujahContentData = `{title: Hallelujah}
{subtitle: Cohen}

Now I've h[G]eard there was a sec[Em]ret chord that D[G]avid played, and it ple[Em]ased the Lord
But y[C]ou dont really c[D]are for music, do y[G]ou?  [D]
It g[G]oes like this, the f[C]ourth, the f[D]ifth, the m[Em]inor falls, the m[C]ajor lift
The b[D]affled king comp[B7]osing Hallel[Em]ujah

{c:Chorus}
{soc}
Hallel[C]ujah, Hallel[Em]ujah
Hallel[C]ujah, Hallel[G]u-[D]uj-[G]ah[D]
{eoc}

Your faith was strong but you needed proof. You saw her bathing on the roof
Her beauty and the moonlight overthrew her
She tied you to a kitchen chair, she broke your throne, and she cut your hair
And from your lips she drew the Hallelujah

Hallelujah, Hallelujah
Hallelujah, Hallelujah

You say I took the name in vain
I don't even know the name
But if I did, well really, what's it to you?
There's a blaze of light in every word
It doesn't matter which you heard
The holy or the broken Hallelujah

Hallelujah, Hallelujah
Hallelujah, Hallelujah

I did my best, it wasn't much
I couldn't feel, so I tried to touch
I've told the truth, I didn't come to fool you
And even though it all went wrong
I'll stand before the Lord of Song
With nothing on my tongue but Hallelujah

Hallelujah, Hallelujah
Hallelujah, Hallelujah
Etc...`

// First comest title, then comes data.
const songArr = [
	[poguesTitleData, poguesContentData],
	// [nordTitleData, nordContentData],
	[hallelujahTitleData, hallelujahContentData],
]
export { songArr }